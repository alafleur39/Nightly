import { InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const baseStyles =
  "flex items-center gap-3 rounded-full border border-white/5 bg-[#111015]/80 px-4 py-3 text-sm text-white shadow-lg shadow-black/40 backdrop-blur";

export function SearchBar({
  className = "",
  ...inputProps
}: SearchBarProps) {
  return (
    <label className={`${baseStyles} ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4 text-white/60"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-4.35-4.35m1.1-4.65a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
        />
      </svg>
      <input
        type="search"
        className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
        placeholder="Search venues..."
        {...inputProps}
      />
    </label>
  );
}

