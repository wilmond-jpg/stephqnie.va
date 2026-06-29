export function PageNumber({ index, total }: { index: number; total: number }) {
  const fmt = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="page-number">
      {fmt(index)} <span className="opacity-60">/ {fmt(total)}</span>
    </div>
  );
}
