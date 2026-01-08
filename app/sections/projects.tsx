
// app/sections/projects.tsx
export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 md:scroll-mt-20 py-10"
    >
      <h2 id="projects-title" className="text-2xl font-semibold mb-3">
        Projects
      </h2>

      <p className="mb-8">
        Here are a few personal projects I've worked on recently
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Website */}
        <article className="h-full flex flex-col rounded-xl border border-rose-800/20 bg-[#071017] p-6 shadow-sm">
          {/* CONTENT AREA */}
          <div className="flex flex-col grow">
            <h3 className="font-semibold text-gray-100 mb-2">My website</h3>

            <p className="text-sm text-gray-400 mb-4">
              This website you are currently viewing. It is my personal
              portfolio showcasing my projects, skills, and experience in
              cybersecurity and software development.
            </p>

            <div className="mb-4 flex flex-nowrap gap-2 overflow-x-auto h-8">
              {["Next.js", "TypeScript", "CSS", "Vercel"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/Aar00t/My-website"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center"
          >
            GitHub
          </a>
        </article>

        {/* Homelab */}
        <article className="h-full flex flex-col rounded-xl border border-rose-800/20 bg-[#071017] p-6 shadow-sm">
          <div className="flex flex-col grow">
            <h3 className="font-semibold text-gray-100 mb-2">HomeLab</h3>

            <p className="text-sm text-gray-400 mb-4">
              Documentation of my personal HomeLab setup, including hardware,
              software, and network configurations. Recently created, more updates to come.
            </p>

            <div className="mb-4 flex flex-nowrap gap-2 overflow-x-auto h-8">
              {["HomeLab"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/Aar00t/HomeLab"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center"
          >
            GitHub
          </a>
        </article>

        {/* Workshop */}
        <article className="h-full flex flex-col rounded-xl border border-rose-800/20 bg-[#071017] p-6 shadow-sm">
          <div className="flex flex-col grow">
            <h3 className="font-semibold text-gray-100 mb-2">
              Workshop booking solution
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              I’ve worked as a bicycle mechanic and experienced poor booking
              systems, so I started developing a modern booking platform for
              workshops. The project is still in its early stages.
            </p>

            <div className="mb-4 flex flex-nowrap gap-2 overflow-x-auto h-8">
              {["Tech stack not decided yet"].map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center"
          >
            Launch page coming later
          </a>
        </article>
      </div>
    </section>
  );
}
