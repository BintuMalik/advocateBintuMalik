"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import practiceAreas from "@/data/practiceAreas";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  caseType: "",
  message: "",
};

const inputClasses =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-body placeholder:text-gray-400 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.caseType) next.caseType = "Please select a case type.";
    if (!form.message.trim()) next.message = "Please describe your matter briefly.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setForm(initialForm);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {submitted && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800"
        >
          <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
          <p>
            Thank you! Your enquiry has been received. We will contact you
            shortly.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className={inputClasses}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClasses}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="caseType" className="mb-1.5 block text-sm font-medium text-primary">
          Case Type
        </label>
        <select
          id="caseType"
          name="caseType"
          value={form.caseType}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select your case type</option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.title}>
              {area.title}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
        {errors.caseType && (
          <p className="mt-1.5 text-xs text-red-600">{errors.caseType}</p>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your matter"
          className={inputClasses}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send Enquiry
      </button>

      <p className="mt-4 text-xs text-muted">
        This form is for enquiries only and does not create an attorney-client
        relationship.
      </p>
    </form>
  );
}
