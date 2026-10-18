// Cinta de servicios que corre sin fin. La segunda copia solo existe para cerrar el bucle.
export default function Marquee({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="overflow-hidden bg-accent py-3 text-accent-ink md:py-4" role="region" aria-label={label}>
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-6 pr-6 text-xl font-extrabold uppercase tracking-[-0.01em] md:text-2xl">
                {item}
                <span aria-hidden="true">+</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
