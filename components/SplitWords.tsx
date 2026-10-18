// Divide un título en palabras que suben una por una cuando su contenedor [data-reveal="words"]
// entra en pantalla. Los espacios quedan entre spans, así el texto se lee y se indexa normal.
export default function SplitWords({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");

  return (
    <>
      <span>
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span className="sw">
              <span className="swi" style={{ ["--wi" as string]: i + delay }}>
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </>
  );
}
