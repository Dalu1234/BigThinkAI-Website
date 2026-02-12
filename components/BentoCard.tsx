import React, { useEffect, useRef, useState } from 'react'

type Variant = 'content' | 'gallery' | 'featured'

interface BentoCardProps {
  variant?: Variant
  title?: string
  subtitle?: string
  image?: string
  children?: React.ReactNode
  className?: string
}

export default function BentoCard({ variant = 'content', title, subtitle, image, children, className = '' }: BentoCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<number | null>(null)
  const [motionAvailable, setMotionAvailable] = useState<boolean>(false)
  const [transformStyle, setTransformStyle] = useState({ x: 0, y: 0, rx: 0, ry: 0, scale: 1 })

  useEffect(() => {
    // feature-detect framer-motion by attempting dynamic import (ssr-safe)
    let mounted = true
    import('framer-motion')
      .then((m) => {
        if (mounted) setMotionAvailable(true)
      })
      .catch(() => {
        if (mounted) setMotionAvailable(false)
      })
    return () => {
      mounted = false
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let intensity = 18
    function onPointerMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      // normalize
      const nx = (dx / (rect.width / 2))
      const ny = (dy / (rect.height / 2))
      // limit
      const rx = Math.max(-1, Math.min(1, -ny))
      const ry = Math.max(-1, Math.min(1, nx))

      // throttle with rAF
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = requestAnimationFrame(() => {
        setTransformStyle({ x: nx * intensity, y: ny * intensity, rx: rx * 6, ry: ry * 6, scale: 1.01 })
      })
    }

    function onLeave() {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = requestAnimationFrame(() => {
        setTransformStyle({ x: 0, y: 0, rx: 0, ry: 0, scale: 1 })
      })
    }

    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerleave', onLeave)
    el.addEventListener('pointercancel', onLeave)

    return () => {
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerleave', onLeave)
      el.removeEventListener('pointercancel', onLeave)
    }
  }, [])

  const dataMag = motionAvailable ? 'true' : 'true' // enable hint regardless; motion will enhance if available

  const base = `bento-card ${className}`

  // Inline transform fallback for environments without framer-motion
  const fallbackStyle: React.CSSProperties = {
    transform: `perspective(900px) translate3d(${transformStyle.x / 4}px, ${transformStyle.y / 4}px, 0) rotateX(${transformStyle.rx}deg) rotateY(${transformStyle.ry}deg) scale(${transformStyle.scale})`
  }

  // Render
  return (
    <div ref={ref} className={base} data-variant={variant} data-magnetic={dataMag} aria-hidden={false}>
      <div className="bento-card__rim" aria-hidden="true" />

      {image ? (
        <div className="bento-card__media" style={motionAvailable ? undefined : fallbackStyle}>
          {motionAvailable ? (
            // When framer-motion is available, use its motion.div for smooth spring physics
            // dynamic import ensures no SSR failure if framer-motion isn't installed
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require('framer-motion').motion.div({
              style: { width: '100%', height: '100%' },
              animate: { x: transformStyle.x / 6, y: transformStyle.y / 6, rotateX: transformStyle.rx, rotateY: transformStyle.ry, scale: transformStyle.scale },
              transition: { type: 'spring', stiffness: 220, damping: 26 }
            }, (
              <img src={image} alt={title ?? 'Bento media'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ))
          ) : (
            <img src={image} alt={title ?? 'Bento media'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          )}
        </div>
      ) : null}

      <div className="bento-card__content">
        {title ? <div className="bento-card__title">{title}</div> : null}
        {subtitle ? <div className="bento-card__meta">{subtitle}</div> : null}
        <div style={{ marginTop: 8 }}>{children}</div>
      </div>
    </div>
  )
}
