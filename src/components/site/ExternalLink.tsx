import { ArrowUpRight } from "lucide-react";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 border-b border-current/40 pb-0.5 transition-colors hover:border-current ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}
