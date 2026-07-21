export default function Divider({ tone = "maroon" }) {
  const color = tone === "ivory" ? "#FBF7F1" : "#6E0F1F";
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className="h-px w-16 sm:w-28" style={{ backgroundColor: color, opacity: 0.35 }} />
      <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
        <path
          d="M17 2c5 0 8 3.4 8 7.6 0 4-2.8 6.6-6.3 6.6-2.4 0-4-1.4-4-3.3 0-1.6 1.1-2.7 2.5-2.7 1.1 0 1.9.8 1.9 1.8 0 .7-.5 1.2-1.1 1.2"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="6" cy="11" r="1.4" fill={color} opacity="0.6" />
        <circle cx="28" cy="11" r="1.4" fill={color} opacity="0.6" />
      </svg>
      <span className="h-px w-16 sm:w-28" style={{ backgroundColor: color, opacity: 0.35 }} />
    </div>
  );
}
