"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="mailto:kevinjkevps4@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-white hover:text-black transition-all shadow-lg"
        aria-label="Send email"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>

      <a
        href="https://wa.me/593985295277"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-white hover:text-black transition-all shadow-lg"
        aria-label="WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-.83-.55-1.581-1.175-.748-.624-1.25-1.372-1.397-1.603-.148-.232-.017-.366.11-.485.118-.118.273-.298.41-.448.136-.15.182-.248.273-.412.09-.164.045-.307.02-.424-.025-.118-.15-.248-.297-.35-.148-.102-.32-.102-.44-.102h-.44c-.119 0-.32.02-.488.15-.149.119-.572.429-.572 1.075 0 .646.585 1.25 1.227 1.743.748.574 1.697.919 2.227 1.05.176.04.32.063.44.063.12 0 .274-.02.395-.075.12-.054.273-.22.41-.42.137-.199.046-.372.01-.46-.025-.087-.099-.198-.297-.347m-5.421 7.403h-.004a5.473 5.473 0 01-2.807-2.807c-.156-.156-.242-.342-.242-.569v-1.32c0-.312.062-.614.242-.82.18-.223.39-.446.787-.446h1.32c.226 0 .412.063.57.198.157.135.24.335.24.569v1.32c0 .227-.083.434-.24.57-.157.135-.344.24-.57.24-.227 0-.434-.062-.57-.198-.136-.135-.24-.344-.24-.57v-.804c0-.226.104-.434.24-.57.136-.135.343-.24.57-.24.226 0 .412.105.57.24.157.135.24.343.24.57v.804c0 .227-.083.413-.24.57-.157.134-.344.198-.57.198M12 2.5C6.477 2.5 2 6.977 2 12.5c0 .354.028.702.082 1.042l-.428 1.635a.5.5 0 00.636.636l1.635-.428A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2.5 12 2.5"/>
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-white hover:text-black transition-all shadow-lg"
        aria-label="LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.771v20.458C0 23.227.792 24 1.771 24h20.449C23.2 24 24 23.227 24 22.229V1.771C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  );
}