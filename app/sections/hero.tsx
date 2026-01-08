
// app/sections/hero.tsx
export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="flex flex-col justify-center py-10 scroll-mt-80 md:scroll-mt-25">
      <h1 id="hero-title" className="text-4xl font-bold">Hello, I’m Aaro!</h1>
      <p className="mt-3 text-lg">
        3rd Year IT Student from Finland Specialising in Cybersecurity.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#contact"
          className="rounded-md bg-rose-500 px-6 py-3 text-white font-medium hover:bg-rose-600 transition-colors"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="rounded-md bg-gray-700 px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
        >
          See Projects
        </a>
      </div>
    </section>
  );
}
