/* Monochrome line icons in the dashboard's hand: 24px grid, 1.6 stroke,
   round caps, currentColor. Replaces the Font Awesome kit, so the site makes
   no third-party requests at all. Decorative by default (aria-hidden); the
   control that holds an icon carries the accessible name. */

const paths = {
  home: (
    <>
      <path d="M3.6 10.6 12 3.8l8.4 6.8" />
      <path d="M5.6 9v10a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V9" />
      <path d="M10 20.6v-5.4a2 2 0 0 1 4 0v5.4" />
    </>
  ),
  braces: (
    <>
      <path d="M8.4 4.4c-2.2 0-3 .9-3 2.8v2.2c0 1.2-.8 2.2-2.2 2.6 1.4.4 2.2 1.4 2.2 2.6v2.2c0 1.9.8 2.8 3 2.8" />
      <path d="M15.6 4.4c2.2 0 3 .9 3 2.8v2.2c0 1.2.8 2.2 2.2 2.6-1.4.4-2.2 1.4-2.2 2.6v2.2c0 1.9-.8 2.8-3 2.8" />
      <path d="M10.2 12h.1M13.8 12h.1" strokeWidth="2.4" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9.4" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.4" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.4" ry="3.8" transform="rotate(120 12 12)" />
    </>
  ),
  branch: (
    <>
      <circle cx="6.4" cy="5.6" r="2.2" />
      <circle cx="6.4" cy="18.4" r="2.2" />
      <circle cx="17.6" cy="8" r="2.2" />
      <path d="M6.4 7.8v8.4" />
      <path d="M17.6 10.2c0 4.2-3.4 4.6-6.4 5.2-2.2.4-3.6.9-4.4 2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.2c.5 4.6 2.6 6.9 7.2 7.4-4.6.5-6.7 2.8-7.2 7.4-.5-4.6-2.6-6.9-7.2-7.4 4.6-.5 6.7-2.8 7.2-7.4Z" strokeLinejoin="round" />
      <path d="M18.6 15.6c.2 1.7 1 2.5 2.6 2.7-1.6.2-2.4 1-2.6 2.7-.2-1.7-1-2.5-2.6-2.7 1.6-.2 2.4-1 2.6-2.7Z" strokeLinejoin="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.6" />
      <path d="m4 7 8 6 8-6" strokeLinejoin="round" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4" />
      <path d="M8 10.6v5.8M12 16.4v-5.8M12 13.2a2.6 2.6 0 0 1 5.2 0v3.2" />
      <path d="M8 7.6h.1" strokeWidth="2.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <path d="M17 7h.1" strokeWidth="2.4" />
    </>
  ),
  // A brand mark, so filled — the way the dashboard knocks site favicons
  // out to flat white.
  github: (
    <path
      transform="translate(2.4 2.4) scale(1.2)"
      fill="currentColor"
      stroke="none"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
    />
  ),
  arrow: <path d="M4.8 12h14.4M13.4 6.2 19.2 12l-5.8 5.8" strokeLinejoin="round" />,
  external: (
    <>
      <path d="M8.4 5.2H6.6a2 2 0 0 0-2 2v10.2a2 2 0 0 0 2 2h10.2a2 2 0 0 0 2-2v-1.8" />
      <path d="M13.2 4.6h6.2v6.2M19.2 4.8 11 13" strokeLinejoin="round" />
    </>
  ),
  copy: (
    <>
      <rect x="8.4" y="8.4" width="12" height="12" rx="2.6" />
      <path d="M15.6 8.4V6.2a2.6 2.6 0 0 0-2.6-2.6H6.2a2.6 2.6 0 0 0-2.6 2.6V13a2.6 2.6 0 0 0 2.6 2.6h2.2" />
    </>
  ),
  check: <path d="m5 12.6 4.4 4.4L19 7.4" strokeLinejoin="round" />,
  close: <path d="M6.4 6.4 17.6 17.6M17.6 6.4 6.4 17.6" />,
  list: (
    <>
      <path d="M9.4 6.4h10.4M9.4 12h10.4M9.4 17.6h10.4" />
      <path d="M4.6 6.4h.1M4.6 12h.1M4.6 17.6h.1" strokeWidth="2.4" />
    </>
  ),
  expand: (
    <path d="M14.6 4.4h5v5M9.4 19.6h-5v-5M19.6 4.4 13.8 10.2M4.4 19.6l5.8-5.8" strokeLinejoin="round" />
  ),
  cookie: (
    <>
      <path d="M20.6 12.4A8.6 8.6 0 1 1 11.6 3.4a3 3 0 0 0 3.6 3.6 3 3 0 0 0 3.6 3.6c.6.3 1.2.6 1.8.8Z" strokeLinejoin="round" />
      <path d="M8.4 9.6h.1M8 14.4h.1M12 12.4h.1M15.6 15.6h.1M11.6 17.2h.1" strokeWidth="2.4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2 5.2-2Z" strokeLinejoin="round" />
    </>
  ),
} as const

export type IconName = keyof typeof paths

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export default function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
