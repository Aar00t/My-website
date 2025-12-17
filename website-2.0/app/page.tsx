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

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
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
        </nav>
      </header>

      {/* Body / Sections */}
      <div className="mx-auto max-w-5xl px-6">
        {/* Home (Hero) */}
        <section id="home" className="flex min-h-[60vh] flex-col justify-center py-16">
          <h1 className="text-4xl font-bold">Hello, I’m Aaro!</h1>
          <p className="mt-3 text-lg">
            3rd year Cybersecurity student From Finland. 
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              See Projects
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <h2 className="text-2xl font-semibold">About</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 items-center">
            {/* Left: Large card with Donut chart */}
            <div>
              <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-8 shadow-sm min-h-[28rem] flex items-center justify-center">
                <div>
                  <h3 className="mb-6 text-lg font-medium text-gray-100">Study Progress</h3>
                  <div className="flex items-center justify-center">
                    <DonutChart percentage={52.5} completedECTS={126} requiredECTS={240} />
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
                <p className="mt-4 text-sm text-gray-300">
                  My expertise spans penetration testing, secure software development, network security, and compliance frameworks. I'm committed to staying ahead of emerging threats and continuously updating my skills.
                </p>
              </div>
            </div>
          </div>

          {/* Specializations / Interests grid 2x3 */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-medium">Specializations & Interests</h3>
            <div className="grid grid-cols-2 gap-4">
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
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <article className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="font-medium">Home Lab</h3>
              <p className="mt-2 text-sm text-gray-600">
                ASA5515‑X firewall setup, VLANs, routing, and security policies.
              </p>
            </article>

            <article className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="font-medium">Ethical Hacking Coursework</h3>
              <p className="mt-2 text-sm text-gray-600">
                Lab VMs, shellcode assignments, and secure coding exercises.
              </p>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3">
            Email me at <a href="mailto:contact@aaroot.com" className="underline">contact@aaroot.com</a>.
          </p>
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