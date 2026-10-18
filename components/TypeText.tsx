// Texto que se escribe letra por letra con un cursor cuando su contenedor [data-reveal="type"]
// entra en pantalla. `speed` es el tiempo por letra en ms.
export default function TypeText({ text, speed = 18 }: { text: string; speed?: number }) {
  const chars = Array.from(text);

  return (
    <>
      <span style={{ ["--cs" as string]: `${speed}ms`, ["--total" as string]: `${chars.length * speed + 400}ms` }}>
        {chars.map((char, i) => (
          <span key={i} className="tc" style={{ ["--ci" as string]: i }}>
            {char}
          </span>
        ))}
        <span className="type-caret" aria-hidden="true" />
      </span>
    </>
  );
}
