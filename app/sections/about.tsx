
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
            <p className="text-sm">
              I’m a third‑year ICT student at JAMK University of Applied Sciences, and my interest in technology has developed naturally 
              throughout my studies. I’m specializing in Cybersecurity and on track to graduate in 2027. I’ve already completed an Ethical 
              Hacking module, and this spring I’ll be taking Cyber Defense and Cybersecurity Exercise courses to build more hands‑on experience 
              on both the offensive and defensive sides of security.            
            </p>
            <p className="mt-4 text-sm">
              Outside of school I work as a part-time bike mechanic and I enjoy cycling and photography. I’m currently looking for an internship or full‑time position starting in May 2026 
              or later where I can learn more and get real‑world experience. I'm highly interested in getting work experience abroad.      
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
