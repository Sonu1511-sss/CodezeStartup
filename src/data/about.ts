export interface AboutStat {
  value: string
  label: string
}

export interface AboutPrinciple {
  title: string
  description: string
  iconName: 'ShieldCheck' | 'Zap' | 'Cpu' | 'Layers'
}

export interface AboutCardMetric {
  value: string
  label: string
}

export const aboutContent = {
  header: {
    eyebrow: 'ABOUT CODEZA',
    heading: 'Built Small by Design. Engineered for Growth.',
    supporting:
      'We help startups turn ambitious ideas into scalable digital products through premium engineering, thoughtful UI/UX, and AI-powered innovation.',
  },
  story: {
    paragraphs: [
      'CODEZA was founded by Chandrabhan Gadeshwer and Shubham Uprade with a mission to help startups launch faster and build smarter digital products.',
      'We specialize in modern web applications, scalable SaaS platforms, startup MVPs, business websites, and AI-powered systems designed to solve real-world problems.',
      'From product strategy and interface design to development, deployment, and ongoing optimization, we focus on building reliable digital experiences that are ready to grow with your business.',
    ],
    card: {
      brand: 'CODEZA',
      tagline: 'Engineering · Est. 2026',
      location: 'India · Building Globally',
      status: 'Building & Innovating',
      metrics: [
        { value: '2026', label: 'Founded' },
        { value: '3+', label: 'Projects Delivered' },
        { value: '5', label: 'Core Team Members' },
      ] as AboutCardMetric[],
    },
  },
  stats: [
    { value: '20+', label: 'Projects Delivered' },
    { value: '15+', label: 'Startup Clients' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support System' },
  ] as AboutStat[],
  principles: {
    heading: 'Four Principles We Never Compromise',
    description:
      'We combine scalable engineering, premium UI/UX, and AI-powered innovation to create digital products that help ambitious businesses move forward.',
    items: [
      {
        title: 'Security by Design',
        description:
          'Secure architecture, responsible data handling, and maintainable systems built from the beginning.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Fast Execution',
        description:
          'Efficient development workflows, clear communication, and reliable delivery.',
        iconName: 'Zap',
      },
      {
        title: 'AI-First Thinking',
        description:
          'Practical AI integrations and automation focused on meaningful business outcomes.',
        iconName: 'Cpu',
      },
      {
        title: 'Scalable Systems',
        description:
          'Performance-focused applications and backend infrastructure designed for long-term growth.',
        iconName: 'Layers',
      },
    ] as AboutPrinciple[],
  },
  commitment: {
    title: 'Built for Your Next Milestone',
    text: 'Whether you are validating an idea, launching your first MVP, or scaling an existing platform, CODEZA works with you to transform business goals into dependable digital solutions.',
    ctaPrimary: {
      label: 'Start a Project',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Explore Our Services',
      href: '#services',
    },
  },
}
