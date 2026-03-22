import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Check, Lock } from 'lucide-react'

export default function Pricing() {
  const [viewers, setViewers] = useState(47)
  const [stock, setStock] = useState(13)

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewers(Math.floor(Math.random() * 16) + 40)
    }, 5000)

    const stockInterval = setInterval(() => {
      setStock(prev => (prev > 3 ? prev - 1 : prev))
    }, 30000)

    return () => {
      clearInterval(viewerInterval)
      clearInterval(stockInterval)
    }
  }, [])

  const includes = [
    "زيت الرجال الطبيعي (10 مل)",
    "شحن مجاني",
    "تغليف سري 100%",
    "دليل الاستخدام المجاني",
    "ضمان الرضا"
  ]

  return (
    <section id="pricing" style={{ padding: '120px 20px', position: 'relative', backgroundColor: 'var(--bg-black)', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vw',
        maxHeight: '800px',
        maxWidth: '800px',
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
          initial={{ y: 80, scale: 0.95, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.8 }}
          style={{
            width: '100%',
            maxWidth: '500px',
            backgroundColor: 'var(--bg-charcoal)',
            border: '2px solid var(--gold-primary)',
            borderRadius: '20px',
            padding: '50px 30px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 20px rgba(201,168,76,0.05)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-15px',
            backgroundColor: 'var(--gold-primary)',
            color: 'var(--bg-black)',
            padding: '6px 24px',
            borderRadius: 'var(--radius-full)',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 4px 10px rgba(201,168,76,0.3)',
            zIndex: 2
          }}>
            الأكثر مبيعًا
          </div>

          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            src="/imgs/product.png" 
            alt="Product" 
            style={{ width: '150px', height: 'auto', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(201,168,76,0.2))', zIndex: 1 }} 
          />

          <h3 style={{ fontSize: '28px', color: 'var(--text-white)', margin: '0 0 5px 0', textAlign: 'center' }}>زيت الرجال الطبيعي</h3>
          <span style={{ fontSize: '16px', color: 'var(--text-offwhite)', opacity: 0.7, marginBottom: '20px' }}>10 مل</span>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '18px', color: 'var(--color-red)', textDecoration: 'line-through', marginBottom: '5px' }}
          >
            السعر الأصلي: 399 د.إ
          </motion.div>

          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.7, bounce: 0.5 }}
            style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--gold-primary)', marginBottom: '10px' }}
          >
            السعر الحالي: 199 د.إ
          </motion.div>

          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.9 }}
            style={{ backgroundColor: 'rgba(45,139,78,0.2)', border: '1px solid var(--color-green)', color: 'var(--color-green)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '16px', marginBottom: '30px' }}
          >
            وفّر 50%! 🎉
          </motion.div>

          <div style={{ width: '100%', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {includes.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + (i * 0.1) }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: 'var(--text-white)' }}
              >
                <Check size={18} color="var(--color-green)" strokeWidth={3} />
                {item}
              </motion.div>
            ))}
          </div>

          <motion.button
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '100%',
              background: 'var(--gold-gradient)',
              color: 'var(--bg-black)',
              fontSize: '18px',
              fontFamily: 'var(--font-primary)',
              fontWeight: 'bold',
              padding: '18px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-gold)',
              marginBottom: '15px'
            }}
          >
            🛒 اطلب الآن — الكمية محدودة!
          </motion.button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-offwhite)', opacity: 0.8, marginBottom: '15px' }}>
            <Lock size={14} /> دفع آمن ومشفر
          </div>

          <div style={{ display: 'flex', gap: '10px', opacity: 0.5, fontSize: '12px', color: 'var(--text-white)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '4px 8px', border: '1px solid currentColor', borderRadius: '4px' }}>Visa</span>
            <span style={{ padding: '4px 8px', border: '1px solid currentColor', borderRadius: '4px' }}>Mastercard</span>
            <span style={{ padding: '4px 8px', border: '1px solid currentColor', borderRadius: '4px' }}>Apple Pay</span>
            <span style={{ padding: '4px 8px', border: '1px solid currentColor', borderRadius: '4px' }}>الدفع عند الاستلام</span>
          </div>
        </motion.div>

        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', color: 'var(--color-red)' }}
          >
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-red)', borderRadius: '50%' }}
            />
            <span style={{ fontVariantNumeric: 'tabular-nums' }}>{viewers} شخصًا يشاهدون هذا المنتج الآن</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
            style={{ fontSize: '16px', color: 'var(--gold-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span>⚠️</span> <span style={{ fontVariantNumeric: 'tabular-nums' }}>متبقي {stock} قطعة فقط في المخزون</span>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
