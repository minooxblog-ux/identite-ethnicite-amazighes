import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 47 * 60 + 33)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 2 * 3600 + 47 * 60 + 33 // reset
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <section style={{ padding: '120px 20px', backgroundColor: 'var(--bg-black)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120vw',
        height: '120vw',
        maxHeight: '1200px',
        maxWidth: '1200px',
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <motion.h2
          initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(32px, 5vw, 42px)', color: 'var(--text-white)', margin: '0 0 15px 0', lineHeight: 1.3 }}
        >
          لا تنتظر أكثر — اتخذ الخطوة الأولى نحو الثقة
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontSize: '22px', color: 'var(--gold-primary)', margin: '0 0 40px 0' }}
        >
          انضم إلى آلاف الرجال الذين غيّروا حياتهم
        </motion.p>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.4 }}
          style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}
        >
          <motion.img
            src="/imgs/product.png"
            alt="Product"
            style={{ width: '250px', height: 'auto', filter: 'drop-shadow(0 30px 60px rgba(201,168,76,0.25))' }}
            animate={{ y: [-10, 10] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontSize: '28px', color: 'var(--text-white)', marginBottom: '30px' }}
        >
          <span style={{ fontWeight: 'bold', color: 'var(--gold-primary)' }}>199 د.إ فقط</span> بدلاً من <span style={{ textDecoration: 'line-through', fontSize: '22px', opacity: 0.7 }}>399 د.إ</span>
        </motion.div>

        <motion.button
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'var(--gold-gradient)',
            color: 'var(--bg-black)',
            fontSize: '22px',
            fontFamily: 'var(--font-primary)',
            fontWeight: 'bold',
            padding: '20px 60px',
            borderRadius: 'var(--radius-full)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 0 40px rgba(201,168,76,0.6)',
            marginBottom: '20px',
            width: '100%',
            maxWidth: '450px'
          }}
          onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          🛒 اطلب الآن واستمتع بالفرق
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          style={{ fontSize: '16px', color: 'var(--text-offwhite)', marginBottom: '20px' }}
        >
          🚚 شحن مجاني وسري | ⚡ توصيل خلال 2-5 أيام
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ fontSize: '18px', color: 'var(--color-red)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <span>⏰ هذا العرض متاح لفترة محدودة:</span>
          <span style={{ fontVariantNumeric: 'tabular-nums', backgroundColor: 'rgba(139,26,26,0.2)', padding: '4px 8px', borderRadius: '4px' }}>
            {formatTime(timeLeft)}
          </span>
        </motion.div>

      </div>
    </section>
  )
}
