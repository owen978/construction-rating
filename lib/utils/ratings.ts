export function formatRating(rating: number | null): string {
  if (rating === null || rating === undefined) return "N/A";
  return rating.toFixed(1);
}

export function getRatingColor(rating: number | null): string {
  if (rating === null) return "text-gray-400";
  if (rating >= 4) return "text-green-600";
  if (rating >= 3) return "text-amber-500";
  if (rating >= 2) return "text-orange-500";
  return "text-red-500";
}

export function getRatingLabel(rating: number | null): string {
  if (rating === null) return "Not yet rated";
  if (rating >= 4.5) return "Excellent";
  if (rating >= 4) return "Very Good";
  if (rating >= 3) return "Good";
  if (rating >= 2) return "Fair";
  return "Poor";
}

export function calculateOverall(ratings: {
  payment_reliability: number;
  communication: number;
  site_management: number;
  health_and_safety: number;
}): number {
  return (
    (ratings.payment_reliability +
      ratings.communication +
      ratings.site_management +
      ratings.health_and_safety) /
    4
  );
}

export function formatCategory(category: string | null): string {
  if (!category) return "";
  return category
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const RATING_CATEGORIES = [
  { key: "payment_reliability" as const, label: "Payment Reliability" },
  { key: "communication" as const, label: "Communication" },
  { key: "site_management" as const, label: "Site Management" },
  { key: "health_and_safety" as const, label: "Health & Safety" },
];

export const TRADES = [
  "Bricklayer",
  "Carpenter / Joiner",
  "Electrician",
  "Groundworker",
  "Painter & Decorator",
  "Plasterer",
  "Plumber",
  "Roofer",
  "Scaffolder",
  "Steel Fixer",
  "Tiler",
  "Plant Operator",
  "Project Manager",
  "Quantity Surveyor",
  "Site Manager",
  "Other",
] as const;

export const RELATIONSHIPS = [
  { value: "subcontractor", label: "Subcontractor" },
  { value: "supplier", label: "Supplier" },
  { value: "employee", label: "Employee" },
  { value: "client", label: "Client" },
] as const;

export const PROJECT_VALUE_BRACKETS = [
  "Under £50k",
  "£50k - £250k",
  "£250k - £1m",
  "£1m - £5m",
  "£5m - £25m",
  "£25m - £100m",
  "Over £100m",
] as const;
