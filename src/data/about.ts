export interface AboutStat {
  value: string
  label: string
}

export interface AboutVideoConfig {
  /**
   * Path or URL to the company introduction video (e.g., '/videos/intro.mp4').
   * If left empty, a clean dark placeholder with CODEZA branding is displayed.
   */
  src: string
  /**
   * Optional custom poster image path.
   */
  poster?: string
  /**
   * Video card caption.
   */
  caption: string
}

export const aboutContent = {
  label: 'ABOUT CODEZA',
  heading: 'We Build Digital Products That Matter.',
  description:
    'CODEZA helps startups build modern web applications, scalable SaaS platforms, and AI-powered solutions through thoughtful design and reliable engineering.',
  stats: [
    { value: '20+', label: 'Projects Delivered' },
    { value: '15+', label: 'Startup Clients' },
    { value: '2026', label: 'Founded' },
  ] as AboutStat[],
  ctaText: "Let's Talk",
  ctaHref: '#contact',
  video: {
    src: '', // Configurable company introduction video source
    poster: '',
    caption: 'Meet CODEZA',
  } as AboutVideoConfig,
}
