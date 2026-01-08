
// app/sections/projects.tsx
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 md:scroll-mt-20 py-10">
      <h2 id="projects-title" className="text-2xl font-semibold mb-3">Projects</h2>
      <p className="mb-8">
        A collection of security-focused applications and tools I've built to solve real-world challenges
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* SecureAuth Portal */}
        <article className="rounded-xl border border-rose-800/20 bg-[#071017] p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-500" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v4" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-100 mb-2">SecureAuth Portal</h3>
          <p className="text-sm text-gray-400 mb-4">
            A comprehensive authentication system with multi-factor authentication, biometric support, and advanced session management.
          </p>
          <div className="mb-4 flex flex-nowrap gap-2 overflow-x-auto">
            {['React', 'Node.js', 'JWT', 'OAuth2'].map((t) => (
              <span key={t} className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/aar00t/secureauth-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center"
          >
            GitHub
          </a>
        </article>

        {/* VulnScanner Pro */}
        <article className="rounded-xl border border-rose-800/20 bg-[#071017] p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-500" aria-hidden="true">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v4l3 2" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-100 mb-2">VulnScanner Pro</h3>
          <p className="text-sm text-gray-400 mb-4">
            Automated vulnerability scanning tool that identifies security weaknesses in web applications and APIs.
          </p>
          <div className="mb-4 flex flex-nowrap gap-2 overflow-x-auto">
            {['Python', 'Security', 'REST API', 'Docker'].map((t) => (
              <span key={t} className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/aar00t/vuln-scanner-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center"
          >
            GitHub
          </a>
        </article>

        {/* Encrypted Chat App */}
        <article className="rounded-xl border border-rose-800/20 bg-[#071017] p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-500" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-100 mb-2">Encrypted Chat App</h3>
          <p className="text-sm text-gray-400 mb-4">
            End-to-end encrypted messaging application with self-destructing messages and zero-knowledge architecture.
          </p>
          <div className="mb-4 flex flex-nowrap gap-2 overflow-x-auto">
            {['React Native', 'WebRTC', 'Cryptography'].map((t) => (
              <span key={t} className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/aar00t/encrypted-chat-app"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center"
          >
            GitHub
          </a>
        </article>
      </div>
    </section>
  );
}
``
