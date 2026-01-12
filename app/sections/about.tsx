
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
              My name is Aaro and I’m a student from Finland. Currently in my third year studying for a bachelor’s degree in information and communication
              technology at JAMK University of Applied Sciences. I’m specializing in Cybersecurity and on track to graduate in 2027. I have built a solid foundation in 
              programming and data networks during the first two years of my studies. This third year, I’m specialising in cybersecurity 
              and have already completed an Ethical Hacking module. In the spring semester, I will be taking Cyber Defence and Cybersecurity Exercise courses.
            </p>
            <p className="mt-4 text-sm">
              Outside of school I work as a part-time bike mechanic and I enjoy cycling and photography. I’m actively looking for an internship for summer 2026 
              to deepen my knowledge and apply skills in real-world projects and to fulfil graduation requirements. I am also interested in getting work experience 
              outside of Finland.
            </p>
          </div>
        </div>
      </div>

      {/* Specializations / Interests grid 2x3 */}
      <div className="mt-8">
        <h3 className="mb-4 text-lg font-medium">Specializations &amp; Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Python', desc: 'Programming, data analysis' },
            { title: 'Data Networking', desc: 'OSI, TCP/UDP, IP addressing, subnets' },
            { title: 'Security testing', desc: 'OWASP Top 10, Software exploitation, Red Teaming' },
            { title: 'Reverse Engineering', desc: 'IDA, Assembly, x86' },
            { title: 'SOC', desc: 'SIEM Monitoring, threat detection' },
            { title: 'Incident Response', desc: 'Triage, forensic analysis' },
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
