import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from './lib/gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, Work, Process, Why } from './components/sections'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>('.st')
    if (prefersReducedMotion()) { steps.forEach((s) => s.classList.add('on')); gsap.set('.pg', { scaleY: 1 }); return }
    gsap.utils.toArray<HTMLElement>('.split').forEach((h) =>
      gsap.from(h.querySelectorAll('.w'), { yPercent: 105, duration: 0.8, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 85%', once: true } }))
    ScrollTrigger.batch('.rv', { start: 'top 88%', once: true, onEnter: (b) => gsap.from(b, { opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power2.out', clearProps: 'all' }) })
    gsap.from('.sc', { opacity: 0, y: 40, stagger: 0.15, duration: 0.8, scrollTrigger: { trigger: '.sv', start: 'top 80%', once: true }, clearProps: 'all' })
    if (document.querySelector('#vis')) {
      gsap.fromTo('#vis', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power3.inOut', scrollTrigger: { trigger: '#vis', start: 'top 80%', once: true } })
      gsap.to('#vis i', { yPercent: (i) => (i + 1) * -12, ease: 'none', scrollTrigger: { trigger: '#vis', scrub: true } })
    }
    gsap.to('.pg', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#tl', start: 'top 60%', end: 'bottom 70%', scrub: true } })
    steps.forEach((s) => ScrollTrigger.create({ trigger: s, start: 'top 65%', onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on') }))
  }, { scope: root })
  return (
    <div ref={root}>
      <Navbar />
      <main><Hero /><About /><Services /><Work /><Process /><Why /><Team /><Contact /></main>
      <Footer />
    </div>
  )
}
