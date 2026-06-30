import { ImageIcon } from "lucide-react";

type Aspect = "square" | "portrait" | "landscape" | "wide" | "menu";

const aspectClass: Record<Aspect, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
  wide: "aspect-[21/9]",
  menu: "aspect-[3/4]",
};

export function ImagePlaceholder({
  label,
  aspect = "landscape",
  className = "",
}: {
  label: string;
  aspect?: Aspect;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-frame placeholder-shimmer ${aspectClass[aspect]} flex flex-col items-center justify-center gap-3 rounded-sm p-6 text-center ${className}`}
    >
      <ImageIcon className="h-6 w-6 opacity-50" strokeWidth={1.25} />
      <div className="max-w-[80%]">
        <div className="text-[0.65rem] tracking-[0.22em] uppercase opacity-70">Replace</div>
        <div className="font-display mt-1 text-sm leading-snug sm:text-base">{label}</div>
      </div>
    </div>
  );
}
