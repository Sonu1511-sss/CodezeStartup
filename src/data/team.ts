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
    role: 'Developer',
    initials: 'CG',
    image: chandrabhanImg,
    imagePosition: 'center 20%',
    specialty: 'Web Architecture &  Cloud Engineering',
  },
  {
    id: 'shubham-uprade',
    name: 'Shubham Uprade',
    role: 'Developer',
    initials: 'SU',
    image: shubhamImg,
    imagePosition: 'center 12%',
    specialty: 'Frontend Systems & UI/UX ',
  },
  {
    id: 'sanjay-sende',
    name: 'Sanjay Sende',
    role: 'Developer',
    initials: 'SS',
    image: sanjuImg,
    imagePosition: 'center 20%',
    specialty: 'Digital Products & SaaS Development',
  },
  {
    id: 'nikhil-waghade',
    name: 'Nikhil Waghade',
    role: 'Developer',
    initials: 'NW',
    image: nikhilImg,
    imagePosition: 'center 15%',
    specialty: 'Backend Services & Database Systems',
  },
  {
    id: 'dharamchand-patle',
    name: 'Dharamchand Patle',
    role: 'Developer',
    initials: 'DP',
    image: dharamImg,
    imagePosition: 'center 18%',
    specialty: 'AI Solutions & Full Stack ',
  },
]
