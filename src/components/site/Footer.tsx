export function Footer() {
  return (
    <footer className="bg-soft-black text-cream/60 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <span className="font-display text-cream/80 truncate text-sm">
          Stephanie Anne Corpuz — Virtual Assistant Portfolio
        </span>
        <span className="text-[0.7rem] tracking-[0.2em] uppercase">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
