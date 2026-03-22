import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  // Show only after scrolling past the hero (approx 500px) and only on mobile
  useEffect(() => {
    const checkScroll = () => {
      if (window.innerWidth <= 768 && window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    checkScroll() 
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ type: 'spring', bounce: 0.2 }}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '75px',
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--gold-primary)',
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px'
      }}
      className="mobile-sticky-cta"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--gold-primary)', lineHeight: 1.2 }}>199 د.إ</span>
          <span style={{ fontSize: '14px', color: 'var(--color-red)', textDecoration: 'line-through', lineHeight: 1 }}>399 د.إ</span>
        </div>
        
        <button
          style={{
            backgroundColor: 'var(--gold-primary)',
            color: 'var(--bg-black)',
            fontWeight: 'bold',
            fontSize: '16px',
            fontFamily: 'var(--font-primary)',
            padding: '12px 30px',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            boxShadow: 'var(--shadow-gold-sm)',
            cursor: 'pointer'
          }}
          onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          اطلب الآن 🛒
        </button>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-sticky-cta {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  )
}
