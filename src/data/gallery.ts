import type { GalleryItem } from '../types'
import studentStoryImg from '../assets/gallery/student_story.jpg'
import teamCelebrationImg from '../assets/gallery/team_celebration.jpg'
import foundersDuoImg from '../assets/gallery/founders_duo.jpg'
import mentorshipMomentImg from '../assets/gallery/mentorship_moment.jpg'
import studentSpotlightImg from '../assets/gallery/student_spotlight.jpg'
import communityGroupImg from '../assets/gallery/community_group.jpg'

export const galleryItems: GalleryItem[] = [
  {
    id: 'placement-story',
    title: 'From Campus to Product Engineer',
    subtitle: 'Placement & Career Journey',
    category: 'story',
    type: 'video',
    image: studentStoryImg,
    tag: 'ANOTHER PLACEMENT FROM CODEZE',
    caption: 'Candid video interview sharing how hands-on coding transformed theoretical knowledge into production-ready software engineering.',
    alt: 'Placement success story of a young engineer at Codeze',
  },
  {
    id: 'sprint-celebration',
    title: 'Celebrating Sprint Milestones',
    subtitle: 'Sweet moments with our developer cohort',
    category: 'celebration',
    type: 'image',
    image: teamCelebrationImg,
    tag: 'MILESTONE CELEBRATIONS',
    caption: 'Festive treats and shared laughter following a successful multi-tenant SaaS delivery sprint.',
    alt: 'Codeze team celebrating sprint milestone with festive sweets in modern office',
  },
  {
    id: 'founders-studio',
    title: 'Collaborative Innovation',
    subtitle: 'Lead Architects in the Studio',
    category: 'community',
    type: 'image',
    image: foundersDuoImg,
    tag: 'STUDIO LIFE',
    caption: 'Daily standup and architecture brainstorm session in the startup tech bay.',
    alt: 'Codeze engineers smiling in front of creative tech workspace',
  },
  {
    id: 'impact-stat',
    title: 'Impact Metric',
    subtitle: 'Reaching learners and founders nationwide',
    category: 'stat',
    type: 'stat',
    statNumber: '01',
    statUnit: 'Million',
    statLabel: 'Students & Devs Impacted',
    tag: 'CODEZE REACH',
    alt: '01 Million Students & Devs Impacted at Codeze',
  },
  {
    id: 'mentorship-moment',
    title: 'Mentorship & Recognition',
    subtitle: 'Pair programming and mutual wins',
    category: 'mentorship',
    type: 'image',
    image: mentorshipMomentImg,
    tag: 'PEER MENTORSHIP',
    caption: 'Celebrating personal growth, code reviews, and project breakthroughs together.',
    alt: 'Engineers celebrating mentorship achievement with coffee and cake',
  },
  {
    id: 'college-to-code',
    title: 'Engineering Deep-Dive',
    subtitle: 'Building in public & tech mastery',
    category: 'story',
    type: 'video',
    image: studentSpotlightImg,
    captionBadge: 'Maine College',
    tag: 'DEV SPOTLIGHT',
    caption: 'Reflecting on building complex full-stack web applications and transitioning to enterprise engineering.',
    alt: 'Software engineering student in stylish workspace with bicycle backdrop',
  },
  {
    id: 'community-cohort',
    title: 'The Codeze Developer Family',
    subtitle: 'Builders, engineers, and creators united',
    category: 'community',
    type: 'image',
    image: communityGroupImg,
    tag: 'COMMUNITY & COHORT',
    caption: 'A united collective of builders pushing boundaries and shipping modern software products together.',
    alt: 'Codeze engineering community cohort standing together smiling in office',
  },
]
