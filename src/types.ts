export interface Offering { title: string; description: string; capabilities: string[] }
export interface Showcase {
  name: string
  category: string
  description: string
  tech: string[]
  url?: string
  placeholder?: boolean
  image?: string
  status?: 'In Development' | 'Planned' | string
  previewType?: 'cloud' | 'ai' | 'studio'
}
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

export interface GalleryItem {
  id: string
  title: string
  subtitle?: string
  category: 'story' | 'celebration' | 'mentorship' | 'stat' | 'community'
  type: 'image' | 'video' | 'stat'
  image?: string
  videoUrl?: string
  tag?: string
  captionBadge?: string
  caption?: string
  statNumber?: string
  statUnit?: string
  statLabel?: string
  alt: string
}
