export interface Offering { title: string; description: string; capabilities: string[] }
export interface Showcase { name: string; category: string; description: string; tech: string[]; url?: string; placeholder?: boolean; image?: string }
export interface Step { title: string; text: string }
export interface TeamMember {
  id: string
  name: string
  role: string
  initials: string
  image: string
  imagePosition?: string
  specialty?: string
  linkedin?: string
  size?: 'large' | 'medium' | 'small'
}
export interface ClientReview {
  id: string
  name: string
  role: string
  company: string
  initials: string
  rating: number
  review: string
  project: string
  tag: string
}
