import type { Step } from '../types'
import { Target, Cpu, PenTool, Wrench, Gauge, MessageSquare } from 'lucide-react'
export const steps: Step[] = [
  { title: 'Discover', text: 'Understand the client’s goals, audience, requirements, and challenges.' },
  { title: 'Strategize', text: 'Define scope, features, priorities, and technical direction.' },
  { title: 'Design', text: 'Create user flows, UI concepts, and visual experiences.' },
  { title: 'Develop', text: 'Build the solution using the agreed technologies.' },
  { title: 'Test', text: 'Validate functionality, accessibility, responsiveness, and performance.' },
  { title: 'Launch', text: 'Deploy the solution and complete the agreed handover.' }
]
export const why = [
  { icon: Target, title: 'Business-focused solutions', text: 'We start from your goals, then choose the technology.' },
  { icon: Cpu, title: 'Modern technology', text: 'Current tools, chosen for the job rather than the trend.' },
  { icon: PenTool, title: 'Thoughtful design', text: 'Interfaces that are clear, usable and consistent.' },
  { icon: Wrench, title: 'Maintainable software', text: 'Code organised so it stays easy to change.' },
  { icon: Gauge, title: 'Performance-conscious development', text: 'Speed and responsiveness considered from the start.' },
  { icon: MessageSquare, title: 'Transparent communication', text: 'You know the scope, the progress and the next step.' }
]
// Add verified contact details here; the footer shows them only when set.
export const company = { email: '', socials: [] as { label: string; url: string }[], privacyUrl: '', termsUrl: '' }
