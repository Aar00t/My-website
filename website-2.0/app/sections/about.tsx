
// app/sections/about.tsx
import DonutChart from '@/components/donutchart';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-70 md:scroll-mt-25 py-10">
      <h2 id="about-title" className="text-2xl font-semibold">About</h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 items-center">
        {/* Left: Large card with Donut chart */}
        <div>
          <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-8 shadow-sm min-h-[28rem] flex items-center justify-center">
            <div>
              <h3 className="mb-6 text-lg font-medium text-gray-100 justify-center flex">Study Progress</h3>
              <div className="flex items-center justify-center">
                <DonutChart percentage={62.9} completedECTS={151} requiredECTS={240} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text box about yourself */}
        <div>
          <div>
            <h3 className="mb-3 text-lg font-semibold">ICT &amp; Cybersecurity Specialist</h3>
            <p className="text-sm text-gray-300">
              With a strong foundation in information and communications technology, I specialize in identifying
              vulnerabilities, implementing security measures, and developing secure applications that protect
              organizations from cyber threats.
            </p>
            <p className="mt-4 text-sm">
              My expertise spans penetration testing, secure software development, network security, and compliance
              frameworks. I'm committed to staying ahead of emerging threats and continuously updating my skills.
            </p>
          </div>
        </div>
      </div>

      {/* Specializations / Interests grid 2x3 */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-medium">Specializations &amp; Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Penetration Testing', desc: 'Ethical hacking and vulnerability assessment' },
            { title: 'Secure Development', desc: 'Writing secure, robust applications' },
            { title: 'Security Automation', desc: 'Scripting and automation tools' },
            { title: 'Cryptography', desc: 'Encryption and secure communications' },
            { title: 'Network Security', desc: 'Firewall and network hardening' },
            { title: 'Data Protection', desc: 'Secure data storage and compliance' },
          ].map((i) => (
            <div
              key={i.title}
              className="flex gap-4 rounded-xl border border-rose-800/20 bg-[#071017] p-4 shadow-sm"
            >
              <div>
                <div className="font-medium text-gray-100">{i.title}</div>
                <div className="text-sm text-gray-400">{i.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
