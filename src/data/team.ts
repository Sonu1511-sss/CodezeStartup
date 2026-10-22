import type { TeamMember } from '../types'
import chandrabhanImg from '../assets/chandrabhan.jpg'
import shubhamImg from '../assets/shubham.jpg'
import sanjuImg from '../assets/sanju.jpg'
import nikhilImg from '../assets/nikhil.jpg'
import dharamImg from '../assets/dharam.png'

export const team: TeamMember[] = [
  {
    id: 'chandrabhan-gadeshwar',
    name: 'Chandrabhan Gadeshwar',
    role: 'Founder & Web Architect',
    initials: 'CG',
    image: chandrabhanImg,
    imagePosition: 'center 20%',
    specialty: 'Web Architecture & Cloud Engineering',
    linkedin: 'https://www.linkedin.com/in/chandrabhan-gadeshwar',
    size: 'large',
  },
  {
    id: 'sanjay-sende',
    name: 'Sanjay Sende',
    role: 'Full Stack Developer',
    initials: 'SS',
    image: sanjuImg,
    imagePosition: 'center 20%',
    specialty: 'Digital Products & SaaS Development',
    linkedin: 'https://www.linkedin.com/in/sanjay-sende',
    size: 'small',
  },
  {
    id: 'shubham-uprade',
    name: 'Shubham Uprade',
    role: 'Co-Founder & UI/UX Lead',
    initials: 'SU',
    image: shubhamImg,
    imagePosition: 'center 12%',
    specialty: 'Frontend Systems & UI/UX Design',
    linkedin: 'https://www.linkedin.com/in/shubham-uprade',
    size: 'large',
  },
  {
    id: 'nikhil-waghade',
    name: 'Nikhil Waghade',
    role: 'Backend Systems Engineer',
    initials: 'NW',
    image: nikhilImg,
    imagePosition: 'center 15%',
    specialty: 'Backend Services & Database Architecture',
    linkedin: 'https://www.linkedin.com/in/nikhil-waghade',
    size: 'small',
  },
  {
    id: 'dharamchand-patle',
    name: 'Dharamchand Patle',
    role: 'AI Solutions Engineer',
    initials: 'DP',
    image: dharamImg,
    imagePosition: 'center 18%',
    specialty: 'AI Solutions & Full Stack Systems',
    linkedin: 'https://www.linkedin.com/in/dharamchand-patle',
    size: 'medium',
  },
]
