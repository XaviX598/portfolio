type StoreBadgesProps = {
  lang?: "es" | "en";
  className?: string;
};

// Las dos tiendas donde dejamos publicada la app. No son enlaces: indican el servicio de publicación.
export default function StoreBadges({ lang = "es", className = "" }: StoreBadgesProps) {
  const label = lang === "en" ? "Published on" : "Publicada en";

  return (
    <div data-ui className={`flex flex-wrap gap-3 ${className}`}>
      <div className="flex h-14 items-center gap-3 rounded-xl bg-black px-4 text-white ring-1 ring-white/25">
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.37 12.62c-.03-2.7 2.2-4 2.3-4.06-1.25-1.83-3.2-2.08-3.9-2.11-1.66-.17-3.24.98-4.08.98-.85 0-2.14-.96-3.52-.93-1.8.03-3.47 1.05-4.4 2.67-1.88 3.26-.48 8.08 1.35 10.73.9 1.3 1.96 2.75 3.36 2.7 1.35-.05 1.86-.87 3.49-.87 1.62 0 2.08.87 3.5.84 1.45-.02 2.37-1.32 3.25-2.62 1.03-1.5 1.45-2.96 1.47-3.04-.03-.01-2.82-1.08-2.85-4.29zM13.7 4.7c.74-.9 1.24-2.15 1.1-3.4-1.07.04-2.37.71-3.14 1.61-.69.8-1.29 2.08-1.13 3.3 1.19.1 2.41-.6 3.17-1.51z" />
        </svg>
        <span className="leading-none">
          <span className="block text-[13px] opacity-80">{label}</span>
          <span className="block text-xl font-medium">App Store</span>
        </span>
      </div>
      <div className="flex h-14 items-center gap-3 rounded-xl bg-black px-4 text-white ring-1 ring-white/25">
        <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#00d7fe" d="M3.6 2.3c-.3.3-.4.8-.4 1.4v16.6c0 .6.1 1.1.4 1.4l.1.1 9.3-9.3v-.2L3.7 2.2z" />
          <path fill="#ffce00" d="M16.1 15.6 13 12.5v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1z" />
          <path fill="#ff3a44" d="M16.2 15.5 13 12.4l-9.4 9.4c.4.4.9.4 1.6.1l11-6.4" />
          <path fill="#00f076" d="M16.2 9.3 5.2 3c-.7-.4-1.2-.3-1.6.1l9.4 9.3z" />
        </svg>
        <span className="leading-none">
          <span className="block text-[13px] opacity-80">{label}</span>
          <span className="block text-xl font-medium">Google Play</span>
        </span>
      </div>
    </div>
  );
}
