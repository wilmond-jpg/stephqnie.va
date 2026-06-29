export function StatBlock({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const numberColor = tone === "dark" ? "text-chocolate" : "text-cream";
  const lineColor = tone === "dark" ? "bg-gold/70" : "bg-yellow-pale/60";
  const labelColor = tone === "dark" ? "text-brown-deep/80" : "text-cream/70";
  return (
    <div className="flex flex-col gap-3">
      <div className={`font-display text-5xl leading-none sm:text-6xl md:text-7xl ${numberColor}`}>
        {value}
      </div>
      <div className={`h-px w-12 ${lineColor}`} />
      <div className={`text-[0.7rem] tracking-[0.2em] uppercase ${labelColor}`}>{label}</div>
    </div>
  );
}
