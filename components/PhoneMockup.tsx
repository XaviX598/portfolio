import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Marco de celular con la captura real del proyecto vista en móvil (390x844).
export default function PhoneMockup({ src, alt, className = "", sizes = "280px", priority = false }: PhoneMockupProps) {
  return (
    <div data-ui className={`relative aspect-[390/844] rounded-[2.4rem] bg-[#0b0d0c] p-[3.2%] ring-1 ring-white/15 ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-ground">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
        <span className="absolute left-1/2 top-[1.4%] h-[3%] w-[30%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
      </div>
    </div>
  );
}
