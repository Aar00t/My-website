
'use client';

import { useState } from 'react';
import {
  FontAwesomeIcon,
  faEnvelope,
  faSquareGithub,
  faSquareLinkedin,
} from '@/components/icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /**
   * Read the hamburger menu duration (in ms) from the CSS variable
   * set on the <header>. Keeps JS timeout aligned with the CSS animation.
   */
  const getHamburgerMs = () => {
    const header = document.querySelector('header');
    if (!header) return 200;
    const raw = getComputedStyle(header).getPropertyValue('--hamburger-ms').trim(); // e.g., "240ms"
    const n = parseFloat(raw);
    return Number.isFinite(n) ? n : 200;
  };

  /**
   * Close the mobile menu, then scroll after the collapse animation so
   * the header has its final (smaller) height when computing the offset.
   */
  const handleMobileNavClick = (href: string) => {
    // 1) Stop the default anchor jump (we’ll scroll ourselves)
    // 2) Close menu now
    setOpen(false);

    // 3) Wait until the menu's close animation completes
    const delay = getHamburgerMs();
    window.setTimeout(() => {
      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;

      // Measure current header height (after menu collapsed)
      const header = document.querySelector('header') as HTMLElement | null;
      const headerOffset = header?.offsetHeight ?? 0;

      const y =
        target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      // Optional: move focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }, delay + 20); // +20ms buffer beyond CSS duration
  };

  return (
    // Set the hamburger menu duration ONCE here (change '240ms' to your taste).
    // This variable is used by both the CSS animation and the JS timing above.
    <header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur"
      style={{ ['--hamburger-ms' as any]: '240ms' }}
    >
      <nav className="flex items-center justify-between px-6 py-5">
        {/* Brand */}
        <a href="#home" className="text-xl font-semibold">
          Aar00t
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
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

        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:contact@aar00t.com"
            aria-label="Email"
            className="text-rose-500 hover:text-rose-400"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="inline-block"
              style={{ width: 32, height: 32 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aaro-nuoramo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-rose-500 hover:text-rose-400"
          >
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              className="inline-block"
              style={{ width: 32, height: 32 }}
            />
          </a>
          <a
            href="https://github.com/aar00t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-rose-500 hover:text-rose-400"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="inline-block"
              style={{ width: 32, height: 32 }}
            />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-rose-600 hover:text-rose-500"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown below the navbar */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t-2 border-rose-800 px-6 pb-2 transition-[max-height,opacity] ease-in-out duration-[var(--hamburger-ms)] overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-3 pt-4">
          <li>
            <a
              href="#about"
              className="block py-1 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick('#about');
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block py-1 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick('#projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block py-1 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick('#contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mt-4 flex items-center gap-4">
          <a
            href="mailto:contact@aar00t.com"
            aria-label="Email"
            className="text-rose-500 hover:text-rose-400"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="inline-block"
              style={{ width: 28, height: 28 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aaro-nuoramo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-rose-500 hover:text-rose-400"
          >
            <FontAwesomeIcon
              icon={faSquareLinkedin}
              className="inline-block"
              style={{ width: 28, height: 28 }}
            />
          </a>
          <a
            href="https://github.com/aar00t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-rose-500 hover:text-rose-400"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="inline-block"
              style={{ width: 28, height: 28 }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
