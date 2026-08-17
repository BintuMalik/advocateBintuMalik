// AUTO-GENERATED from the Google Business Profile locations spreadsheet.
// To refresh: update the source .xlsx and re-run the generator, or edit by hand.

const offices = [
  {
    "address": "SCO 71, 1st Floor, Sector-40C, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160036",
    "lat": null,
    "lng": null
  },
  {
    "address": "Booth no-12, sector 43B, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160043",
    "lat": null,
    "lng": null
  },
  {
    "address": "SCO NO-80, First Floor,Sector 46C, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160047",
    "lat": null,
    "lng": null
  },
  {
    "address": "SCO NO-13, Sector-27C, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160019",
    "lat": null,
    "lng": null
  },
  {
    "address": "SCO NO-67, Sector-17D, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160017",
    "lat": null,
    "lng": null
  },
  {
    "address": "SHOP NO-50, Sector 14-D, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160014",
    "lat": null,
    "lng": null
  },
  {
    "address": "SHOP NO-105, Plot NO-10, Sector-4, Chandigarh",
    "locality": "Chandigarh",
    "postalCode": "160014",
    "lat": null,
    "lng": null
  },
  {
    "address": "SHOP NO-73, Sector-4, Panchkula",
    "locality": "Panchkula",
    "postalCode": "134112",
    "lat": null,
    "lng": null
  },
  {
    "address": "S.C.F NO-138, Sector-17, Panchkula",
    "locality": "Panchkula",
    "postalCode": "134113",
    "lat": null,
    "lng": null
  },
  {
    "address": "SCO-56 1st-Floor, SWASTIK VIMAR MDC, Sector-5 Panchkula",
    "locality": "Panchkula",
    "postalCode": "134114",
    "lat": null,
    "lng": null
  },
  {
    "address": "DSS 185, FIRST FLOOR, SECTOR 21, Panchkula",
    "locality": "Panchkula",
    "postalCode": "134116",
    "lat": null,
    "lng": null
  },
  {
    "address": "SCO 56, 1st Floor, Sector 12A, Panchkula",
    "locality": "Panchkula",
    "postalCode": "134112",
    "lat": null,
    "lng": null
  },
  {
    "address": "SCO. 204,Top Floor, Sector-14, Panchkula",
    "locality": "Panchkula",
    "postalCode": "134113",
    "lat": null,
    "lng": null
  }
];

export function getLocalities() {
  const unique = Array.from(new Set(offices.map((o) => o.locality).filter(Boolean)));
  return unique.sort((a, b) => a.localeCompare(b));
}

export default offices;
