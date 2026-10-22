export interface Offering { title: string; description: string; capabilities: string[] }
export interface Showcase { name: string; category: string; description: string; tech: string[]; url?: string; placeholder?: boolean; image?: string }
export interface Step { title: string; text: string }
export interface TeamMember {
  id: string
  name: string
  role: 'Developer'
  initials: string
  image: string
  imagePosition?: string
  specialty?: string
}
