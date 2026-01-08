import React from 'react';

export const faSquareLinkedin = 'faSquareLinkedin';
export const faSquareGithub = 'faSquareGithub';
export const faEnvelope = 'faEnvelope';

export function FontAwesomeIcon({ icon, className, style }: { icon: string; className?: string; style?: React.CSSProperties }) {
  if (icon === faSquareLinkedin) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        style={style}
        width={20}
        height={20}
      >
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/>
      </svg>
    );
  }

  if (icon === faSquareGithub) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        style={style}
        width={20}
        height={20}
      >
        <path d="M256 32C132.3 32 32 132.3 32 256c0 99.5 64.5 183.8 154 213.9 11.2 2.1 15.3-4.9 15.3-10.9 0-5.4-.2-23.4-.3-42.4-62.6 13.6-75.8-26.9-75.8-26.9-10.2-25.9-24.9-32.8-24.9-32.8-20.4-14 1.5-13.7 1.5-13.7 22.6 1.6 34.5 23.2 34.5 23.2 20.1 34.4 52.7 24.5 65.6 18.8 2-14.6 7.8-24.5 14.2-30.1-50-5.7-102.6-25-102.6-111.3 0-24.6 8.8-44.7 23.2-60.5-2.3-5.7-10-28.8 2.2-60 0 0 18.9-6.1 62 23.1 18-5 37.3-7.5 56.6-7.6 19.2.1 38.6 2.6 56.6 7.6 43-29.3 62-23.1 62-23.1 12.2 31.2 4.5 54.3 2.2 60 14.4 15.8 23.2 35.9 23.2 60.5 0 86.6-52.7 105.5-102.9 111.1 8 6.9 15.1 20.6 15.1 41.5 0 30-.3 54.1-.3 61.5 0 6 4 13.1 15.4 10.9C415.5 439.8 480 355.5 480 256 480 132.3 379.7 32 256 32z"/>
      </svg>
    );
  }

  if (icon === faEnvelope) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
        style={style}
        width={20}
        height={20}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }

  return null;
}
