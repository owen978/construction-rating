"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface StarRatingDisplayProps {
  rating: number | null;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function StarRatingDisplay({
  rating,
  size = "md",
  showValue = true,
  className,
}: StarRatingDisplayProps) {
  const stars = [];
  const displayRating = rating ?? 0;

  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.floor(displayRating);
    const half = !filled && i === Math.ceil(displayRating) && displayRating % 1 >= 0.25;

    stars.push(
      <Star
        key={i}
        className={cn(
          sizeMap[size],
          filled || half
            ? "fill-amber-400 text-amber-400"
            : "fill-slate-200 text-slate-200"
        )}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">{stars}</div>
      {showValue && rating !== null && (
        <span className="ml-1 font-semibold text-slate-700">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

interface StarRatingInputProps {
  value: number;
  onChange: (value: number) => void;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function StarRatingInput({
  value,
  onChange,
  size = "lg",
  label,
}: StarRatingInputProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      )}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="focus:outline-none transition-transform hover:scale-110"
            aria-label={`Rate ${star} out of 5`}
          >
            <Star
              className={cn(
                sizeMap[size],
                star <= value
                  ? "fill-amber-400 text-amber-400"
                  : "fill-slate-200 text-slate-200 hover:fill-amber-200 hover:text-amber-200"
              )}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-slate-500">
          {value > 0 ? `${value}/5` : "Select a rating"}
        </span>
      </div>
    </div>
  );
}
