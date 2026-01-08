
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
              I am a driven and dedicated ICT student at JAMK University of Applied Sciences, with an analytical mindset and a genuine 
              ability to listen and collaborate effectively with others. My interest in technology has steadily evolved, and I’m now in 
              my third year specializing in Cybersecurity, with graduation expected in 2027. I’ve completed an Ethical Hacking module, 
              and upcoming courses in Cyber Defense and Cybersecurity Exercises will further prepare me for both offensive and defensive security roles.          
            </p>
            <p className="mt-4 text-sm">
              Outside my studies, I enjoy cycling and photography. I’m currently seeking an internship or full‑time role starting
              in May 2026 or later, where I can deepen my knowledge, gain real‑world experience, and ideally explore opportunities 
              both in Finland and abroad.            
            </p>
          </div>
        </div>
      </div>

      {/* Specializations / Interests grid 2x3 */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-medium">Specializations &amp; Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Web Application Security', desc: 'OWASP Top 10, Burp Suite' },
            { title: 'Reverse Engineering', desc: 'IDA, Assembly, x86' },
            { title: 'Python', desc: 'Programming, data analysis' },
            { title: 'SOC', desc: 'SIEM Monitoring, threat detection' },
            { title: 'Incident Response', desc: 'Triage, forensic analysis' },
            { title: 'Data Networking', desc: 'Firewall, network hardening' },
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
