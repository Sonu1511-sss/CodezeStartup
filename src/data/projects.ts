import type { Showcase } from '../types'
import namasteImg from '../assets/Namaste.png'
import uniBillImg from '../assets/UniBill-Photo.png'
import puruliaImg from '../assets/Purulia.png'
import hangryImg from '../assets/Hangry.png'

export const projects: Showcase[] = [
  {
    name: 'Purulia Travels',
    category: 'Travel Platform',
    description:
      'Modern travel website featuring premium UI/UX, destination exploration, and a responsive browsing experience.',
    tech: ['React', 'JavaScript', 'CSS'],
    placeholder: false,
    image: puruliaImg,
    url: 'https://puruliatravelsfinal.netlify.app/',
  },
  {
    name: 'Hangry',
    category: 'Food Delivery',
    description:
      'Modern food delivery platform focused on convenient food ordering, responsive interfaces, and a smooth user experience.',
    tech: ['React', 'JavaScript', 'CSS'],
    placeholder: false,
    image: hangryImg,
    url: 'https://hangry-frontend-seven.vercel.app/',
  },
  {
    name: 'UniBill Pro',
    category: 'Billing SaaS',
    description:
      'Smart billing and invoice management platform designed to simplify billing workflows for modern businesses and startups.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    placeholder: false,
    image: uniBillImg,
    url: 'https://unibillpro.devforge.in/',
  },
  {
    name: 'Namaste Cafe',
    category: 'Restaurant Website',
    description:
      'Premium restaurant website with modern UI, smooth animations, responsive design, and a seamless food ordering experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    placeholder: false,
    image: namasteImg,
    url: 'https://namatecafe.web.app/',
  },
]