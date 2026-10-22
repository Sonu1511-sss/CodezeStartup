import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { reviews } from '../data/reviews'
import { Star, Quote } from 'lucide-react'

function Split({ children }: { children: string }) {
  return (
    <h2 className="split">
      {children.split(' ').map((w, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: '.25em',
          }}
        >
          <span className="w" style={{ display: 'inline-block' }}>
            {w}
          </span>
        </span>
      ))}
    </h2>
  )
}

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Duplicate reviews for seamless infinite looping
  const reviewItems = [...reviews, ...reviews]

  useGSAP(() => {
    if (prefersReducedMotion()) return

    const track = trackRef.current
    if (!track) return

    // Single sleek infinite loop to the left
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: 'none',
      duration: 30,
      repeat: -1,
    })

    // ScrollTrigger velocity boost on scroll
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const vel = Math.abs(self.getVelocity() / 320)
        const scale = gsap.utils.clamp(1, 3, 1 + vel)
        gsap.to(tween, { timeScale: scale, duration: 0.3, overwrite: 'auto' })
      },
    })

    // Slow down on hover for easy reading
    const slowDown = () => gsap.to(tween, { timeScale: 0.2, duration: 0.5, overwrite: 'auto' })
    const speedUp = () => gsap.to(tween, { timeScale: 1, duration: 0.5, overwrite: 'auto' })

    const container = containerRef.current
    if (container) {
      container.addEventListener('mouseenter', slowDown)
      container.addEventListener('mouseleave', speedUp)
      return () => {
        container.removeEventListener('mouseenter', slowDown)
        container.removeEventListener('mouseleave', speedUp)
      }
    }
  }, { scope: containerRef })

  return (
    <section id="reviews" className="reviews-sec" ref={containerRef}>
      <div className="wrap">
        <div className="reviews-header">
          <p className="lab">Client Reviews</p>
          <Split>What Founders Say About VYNTRA</Split>
          <p className="lead rv" style={{ marginTop: '0.75rem', fontSize: '0.98rem' }}>
            Real feedback from ambitious founders and teams who built their digital products, MVPs, and scalable platforms with us.
          </p>
        </div>
      </div>

      {/* Compact Infinite GSAP Scroller Track */}
      <div className="reviews-scroller-wrap rv">
        <div className="reviews-track-outer">
          <div className="reviews-track" ref={trackRef}>
            {reviewItems.map((rev, idx) => (
              <article key={`rev-${idx}`} className="review-card">
                <div className="review-card-glow" aria-hidden="true" />
                <Quote size={24} className="review-quote-watermark" aria-hidden="true" />

                <div className="review-top-meta">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span className="review-tag">{rev.tag}</span>
                </div>

                <p className="review-text">"{rev.review}"</p>

                <div className="review-author">
                  <div className="review-avatar-ring">
                    <span>{rev.initials}</span>
                  </div>
                  <div className="review-author-info">
                    <h4 className="review-author-name">{rev.name}</h4>
                    <span className="review-author-company">
                      {rev.role}, {rev.company}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
