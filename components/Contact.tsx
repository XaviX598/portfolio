import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-zinc-800/60"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-zinc-400 mb-10">
          Feel free to reach out if you would like to collaborate, discuss an
          opportunity, or simply connect.
        </p>

        <div className="flex flex-col items-center gap-6 text-zinc-300">
          {/* PHONE */}
          {/* PHONE */}
<div className="flex items-center gap-3">
  <span className="text-teal-400 text-xl">📞</span>
  <span className="flex items-center gap-2">
    <span className="text-xl">🇪🇨</span>
    <span>+593 985295277</span>
  </span>
</div>


          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <span className="text-teal-400 text-xl">✉️</span>
            <a
              href="mailto:kevinjkevps4@gmail.com"
              className="hover:text-teal-400 transition"
            >
              kevinjkevps4@gmail.com
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="flex items-center gap-3">
            <span className="text-teal-400 text-xl">🔗</span>
            <a
              href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
              target="_blank"
              className="hover:text-teal-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
