import type { Showcase } from '../types'

export const futureProducts: Showcase[] = [
  {
    name: 'VYNTRA Cloud',
    category: 'Cloud Platform & DevOps',
    status: 'In Development',
    previewType: 'cloud',
    description:
      'An AI-assisted platform for application deployment, cloud management, real-time deployment logs, and intelligent troubleshooting.',
    tech: ['AI Diagnostics', 'Cloud Orchestration', 'Log Analytics', 'Kubernetes', 'Edge Runtime'],
    placeholder: false,
  },
  {
    name: 'VYNTRA AI',
    category: 'Intelligent Automation',
    status: 'In Development',
    previewType: 'ai',
    description:
      'AI-powered productivity tools and intelligent automation designed to streamline operations, workflows, and enterprise cognitive tasks.',
    tech: ['Autonomous Agents', 'Neural Workflows', 'Task Automation', 'Python', 'FastAPI'],
    placeholder: false,
  },
  {
    name: 'VYNTRA Studio',
    category: 'Developer Ecosystem',
    status: 'Planned',
    previewType: 'studio',
    description:
      'AI-assisted website and application development tools empowering engineers and creators with generative scaffolds, components, and live preview environments.',
    tech: ['Generative UI', 'Visual Builder', 'React', 'TypeScript', 'WebContainers'],
    placeholder: false,
  },
]

// Backward compatibility alias if needed
export const products = futureProducts
