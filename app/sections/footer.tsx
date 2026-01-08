
// app/sections/footer.tsx

import Link from "next/link";


export default function Footer() {
  return (
    <footer className="border-t bottom-0">
      <div className="grid grid-cols-3 mx-auto max-w-5xl px-6 py-6 text-sm text-gray-300">
        <div className="text-left">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
                    {/* Privacy Notice link */}
          <Link 
            href="/privacy"
            className="text-gray-400 hover:text-gray-200 underline underline-offset-2 transition"
          >
            Privacy Notice
          </Link>

        </div>
        <div className="text-center">
          <p>Contact: aaro.nuoramo@gmail.com</p>


        </div>
        <div className="text-right">
          <p>Designed & built by Aar00t</p>


        </div>
      </div>
    </footer>
  );
}
