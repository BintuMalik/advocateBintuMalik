"use client";

import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import offices, { getLocalities } from "@/data/offices";

const cities = getLocalities();
const tabs = ["All", ...cities];

function directionsUrl(office) {
  const base = "https://www.google.com/maps/search/?api=1&query=";
  if (office.lat && office.lng) {
    return `${base}${office.lat},${office.lng}`;
  }
  return `${base}${encodeURIComponent(office.address)}`;
}

export default function OfficesGrid() {
  const [activeCity, setActiveCity] = useState("All");

  const filtered =
    activeCity === "All"
      ? offices
      : offices.filter((o) => o.locality === activeCity);

  const countFor = (city) =>
    city === "All"
      ? offices.length
      : offices.filter((o) => o.locality === city).length;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {tabs.map((city) => {
          const isActive = activeCity === city;
          return (
            <button
              key={city}
              type="button"
              onClick={() => setActiveCity(city)}
              aria-pressed={isActive}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:px-5 ${
                isActive
                  ? "bg-primary text-white"
                  : "border border-gray-300 bg-white text-body hover:border-accent hover:text-accent"
              }`}
            >
              {city}{" "}
              <span className={isActive ? "text-gray-300" : "text-muted"}>
                ({countFor(city)})
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Showing {filtered.length} {filtered.length === 1 ? "office" : "offices"}
        {activeCity !== "All" ? ` in ${activeCity}` : ""}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((office, index) => (
          <div
            key={`${office.address}-${index}`}
            className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <span className="inline-flex w-fit rounded-lg bg-background p-3 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
              <MapPin size={24} />
            </span>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-body">
              {office.address}
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">
              {office.locality}
              {office.postalCode ? ` — ${office.postalCode}` : ""}
            </p>
            <a
              href={directionsUrl(office)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-primary"
            >
              Get Directions
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
