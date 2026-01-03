
// app/sections/contact.tsx
import { FontAwesomeIcon, faEnvelope, faSquareGithub, faSquareLinkedin } from '@/components/icons';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-15 md:scroll-mt-16 py-10">
      <div className="text-center">
        <h2 id="contact-title" className="text-2xl text-rose-400 font-semibold py-4">Contact</h2>
        <p>Let's connect! Feel free to reach out for work opportunities, questions, or just to say hi.</p>
        <p>I'm actively looking for an internship or a full-time opportunity for summer 2026 to fulfill graduate requirement.</p>
      </div>

      {/* Contact boxes */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {/* Email */}
        <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-3 sm:p-6 text-center">
          <a
            href="mailto:contact@aar00t.com"
            aria-label="Email contact"
            className="group mx-auto block w-full rounded-md p-2 sm:p-4 no-underline bg-transparent focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors duration-150"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-rose-500 group-hover:text-rose-400 inline-block" style={{ width: 28, height: 28 }} />
            </div>
            <div className="font-medium text-gray-100 group-hover:text-rose-200 transition-colors text-base">Email</div>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-3 sm:p-6 text-center">
          <a
            href="https://www.linkedin.com/in/aaro-nuoramo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="group mx-auto block w-full rounded-md p-2 sm:p-4 no-underline bg-transparent focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors duration-150"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FontAwesomeIcon icon={faSquareLinkedin} className="text-rose-500 group-hover:text-rose-400 inline-block" style={{ width: 28, height: 28 }} />
            </div>
            <div className="font-medium text-gray-100 group-hover:text-rose-200 transition-colors text-base">LinkedIn</div>
          </a>
        </div>

        {/* GitHub */}
        <div className="rounded-xl border border-rose-800/20 bg-[#071017] p-3 sm:p-6 text-center">
          <a
            href="https://github.com/aar00t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="group mx-auto block w-full rounded-md p-2 sm:p-4 no-underline bg-transparent focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors duration-150"
          >
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FontAwesomeIcon icon={faSquareGithub} className="text-rose-500 group-hover:text-rose-400 inline-block" style={{ width: 28, height: 28 }} />
            </div>
            <div className="font-medium text-gray-100 group-hover:text-rose-200 transition-colors text-base">GitHub</div>
          </a>
        </div>
      </div>
    </section>
  );
}
``
