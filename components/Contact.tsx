import FadeIn from "./FadeIn";

const channels = [
  {
    title: "WhatsApp",
    subtitle: "Fast response",
    value: "+593 985295277",
    href: "https://wa.me/593985295277",
  },
  {
    title: "Email",
    subtitle: "For opportunities",
    value: "kevinjkevps4@gmail.com",
    href: "mailto:kevinjkevps4@gmail.com",
  },
  {
    title: "LinkedIn",
    subtitle: "Professional profile",
    value: "xavier-aguilar-93759b2bb",
    href: "https://www.linkedin.com/in/xavier-aguilar-93759b2bb",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur p-7 sm:p-10">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              Let&apos;s build something valuable
            </h2>
            <p className="mt-4 text-zinc-400 max-w-3xl leading-relaxed">
              If you are looking for a Full Stack Engineer for a product team,
              project collaboration or freelance delivery, I would love to hear
              about your goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:kevinjkevps4@gmail.com" className="btn-primary-solid">
                Send Email
              </a>
              <a
                href="https://wa.me/593985295277"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-outline"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {channels.map((channel, index) => (
            <FadeIn key={channel.title} delay={0.1 + index * 0.06}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="block rounded-xl border border-white/10 bg-zinc-900/60 p-5 hover:border-teal-400/40 transition-colors"
              >
                <p className="text-zinc-200 font-semibold">{channel.title}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-500 mt-1">
                  {channel.subtitle}
                </p>
                <p className="text-teal-300 text-sm mt-4 break-all">{channel.value}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.26}>
          <footer className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Kevin Xavier Aguilar Velasco. All rights
            reserved.
          </footer>
        </FadeIn>
      </div>
    </section>
  );
}
