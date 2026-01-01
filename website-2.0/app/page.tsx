import { FontAwesomeIcon, faSquareLinkedin, faSquareGithub, faEnvelope } from '../components/icons';


export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Header starts */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        {/* Navbar starts */}
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="/" className="text-lg font-semibold">
            Aar00t
          </a>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="https://github.com/aar00t" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-rose-500 hover:text-rose-400">
              <FontAwesomeIcon icon={faSquareGithub} className="inline-block" style={{ width: 22, height: 22 }} />
            </a>
            <a href="https://www.linkedin.com/in/aaro-nuoramo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-rose-500 hover:text-rose-400">
              <FontAwesomeIcon icon={faSquareLinkedin} className="inline-block" style={{ width: 22, height: 22 }} />
            </a>
            <a href="mailto:contact@aar00t.com" aria-label="Email" className="text-rose-500 hover:text-rose-400">
              <FontAwesomeIcon icon={faEnvelope} className="inline-block" style={{ width: 22, height: 22 }} />
            </a>
          </div>
        </nav> 
        {/* Navbar ends */}
      </header> 
      {/* Header ends */}

      {/* Body / Sections */}
      <div className="mx-auto max-w-5xl px-6">
        {/* Home (Hero) */}
        <section id="home" className="flex min-h-[40vh] flex-col justify-center py-16">
          <h1 className="text-4xl font-bold">Hello, I’m Aaro!</h1>
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
              className="rounded-md bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              See Projects
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" >
          <h2 className="text-2xl font-semibold">About</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 items-center">
            {/* Left: Large card with Donut chart */}
            <div>
              <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-8 shadow-sm min-h-[28rem] flex items-center justify-center">
                <div>
                  <h3 className="mb-6 text-lg font-medium text-gray-100">Study Progress</h3>
                  <div className="flex items-center justify-center">
                    <DonutChart percentage={62.9} completedECTS={151} requiredECTS={240} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text box about yourself */}
            <div>
              <div>
                <h3 className="mb-3 text-lg font-semibold">ICT & Cybersecurity Specialist</h3>
                <p className="text-sm text-gray-300">
                  With a strong foundation in information and communications technology, I specialize in identifying vulnerabilities, implementing security measures, and developing secure applications that protect organizations from cyber threats.
                </p>
                <p className="mt-4 text-sm">
                  My expertise spans penetration testing, secure software development, network security, and compliance frameworks. I'm committed to staying ahead of emerging threats and continuously updating my skills.
                </p>
              </div>
            </div>
          </div>

          {/* Specializations / Interests grid 2x3 */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-medium">Specializations & Interests</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm">
                <div>
                  <div className="font-medium text-gray-100">Penetration Testing</div>
                  <div className="text-sm text-gray-400">Ethical hacking and vulnerability assessment</div>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm">
                <div>
                  <div className="font-medium text-gray-100">Secure Development</div>
                  <div className="text-sm text-gray-400">Writing secure, robust applications</div>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm">
                <div>
                  <div className="font-medium text-gray-100">Security Automation</div>
                  <div className="text-sm text-gray-400">Scripting and automation tools</div>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm">
                <div>
                  <div className="font-medium text-gray-100">Cryptography</div>
                  <div className="text-sm text-gray-400">Encryption and secure communications</div>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm">
                <div>
                  <div className="font-medium text-gray-100">Network Security</div>
                  <div className="text-sm text-gray-400">Firewall and network hardening</div>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm">
                <div>
                  <div className="font-medium text-gray-100">Data Protection</div>
                  <div className="text-sm text-gray-400">Secure data storage and compliance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className=" font-semibold mb-3">Projects & Applications</h2>
          <p className=" mb-8">A collection of security-focused applications and tools I've built to solve real-world challenges</p>
          <div className="grid gap-6 grid-cols-3">
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
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">React</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">Node.js</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">JWT</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">OAuth2</span>
              </div>
              <a href="https://github.com/aar00t/secureauth-portal" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center">
                GitHub
              </a>
            </article>

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
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">Python</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">Security</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">REST API</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">Docker</span>
              </div>
              <a href="https://github.com/aar00t/vuln-scanner-pro" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center">
                GitHub
              </a>
            </article>

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
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">React Native</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">WebRTC</span>
                <span className="px-2 py-1 text-xs rounded bg-rose-900/30 text-rose-400 border border-rose-700/50 whitespace-nowrap">Cryptography</span>
              </div>
              <a href="https://github.com/aar00t/encrypted-chat-app" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center">
                GitHub
              </a>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="text-center">
            <h2 className="text-rose-400 font-semibold">Get in Touch</h2>
            <p>Let's connect! Feel free to reach out for work opportunities, questions, or just to say hi.</p>
            <p>I'm actively looking for an internship or a full-time opportunity for summer 2026 to fulfill graduate requirement.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-8 text-center flex flex-col">
              <a href="https://github.com/aar00t" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="group mx-auto block w-3/4 rounded-md p-4 no-underline bg-transparent focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors duration-150 flex-1 flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faSquareGithub} className="text-rose-500 group-hover:text-rose-400 inline-block" style={{ width: 28, height: 28 }} />
                </div>
                <div>
                  <div className="font-medium text-gray-100 group-hover:text-rose-200 transition-colors">GitHub</div>
                  <div className="mt-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">github.com/aar00t</div>
                </div>
              </a>
            </div>

            <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-8 text-center flex flex-col">
              <a href="https://www.linkedin.com/in/aaro-nuoramo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="group mx-auto block w-full rounded-md p-4 no-underline bg-transparent focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors duration-150 flex-1 flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faSquareLinkedin} className="text-rose-500 group-hover:text-rose-400 inline-block" style={{ width: 28, height: 28 }} />
                </div>
                <div>
                  <div className="font-medium text-gray-100 group-hover:text-rose-200 transition-colors">LinkedIn</div>
                  <div className="mt-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">linkedin.com/in/aaro-nuoramo</div>
                </div>
              </a>
            </div>

            <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-8 text-center flex flex-col">
                <a href="mailto:contact@aar00t.com" aria-label="Email contact" className="group mx-auto block w-3/4 rounded-md p-4 no-underline bg-transparent focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors duration-150 flex-1 flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={faEnvelope} className="text-rose-500 group-hover:text-rose-400 inline-block" style={{ width: 28, height: 28 }} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-100 group-hover:text-rose-200 transition-colors">Email</div>
                    <div className="mt-2 text-sm text-gray-400 group-hover:text-gray-200 transition-colors">contact@aar00t.com</div>
                  </div>
                </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
           </footer>
    </main>
  );
}

function DonutChart({ percentage = 52.5, size = 260, strokeWidth = 18, completedECTS = 126, requiredECTS = 240 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        <g transform={`translate(${size / 2}, ${size / 2})`}>
          <circle
            r={radius}
            fill="transparent"
            stroke="#0f1724"
            strokeWidth={strokeWidth}
          />
          <circle
            r={radius}
            fill="transparent"
            stroke="#f43f5e" /* rose-500 */
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
            transform="rotate(-90)"
          />
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-2xl font-semibold text-rose-400">{percentage}%</div>
        <div className="mt-1 text-sm text-gray-300">{completedECTS} / {requiredECTS}</div>
        <div className="text-xs text-gray-400">Credits</div>
      </div>
    </div>
  );
}