import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.9)']
  )
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(20px)']
  )
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(201,168,76,0)', '1px solid rgba(201,168,76,0.3)']
  )

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottom,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--gold-primary)' }}>
          زيت الرجال الطبيعي
        </div>
        
        <div style={{ fontSize: '14px', color: 'var(--text-offwhite)', display: 'flex', alignItems: 'center', gap: '6px' }} className="nav-center">
          <span>🔒</span> شحن سري وآمن
        </div>
        
        <motion.button
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundColor: 'var(--gold-primary)',
            color: 'var(--bg-black)',
            fontWeight: 'bold',
            fontSize: '14px',
            padding: '6px 20px',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-gold-sm)',
          }}
          onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          اطلب الآن
        </motion.button>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .nav-center {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}
