import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function Guarantee() {
  const points = [
    "✅ ضمان الجودة والأصالة",
    "✅ دعم فني متاح على مدار الساعة",
    "✅ استبدال فوري في حالة وجود أي مشكلة"
  ]

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'var(--bg-black)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: 'rgba(201,168,76,0.03)',
            border: '2px solid rgba(201,168,76,0.2)',
            borderRadius: '20px',
            padding: '50px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              boxShadow: 'inset 0 0 40px rgba(201,168,76,0.2)',
              pointerEvents: 'none',
              borderRadius: '20px'
            }}
          />

          <motion.div
            initial={{ rotate: -10, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
            style={{ marginBottom: '20px' }}
          >
            <ShieldCheck size={60} color="var(--gold-primary)" strokeWidth={1.5} />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '32px', color: 'var(--gold-primary)', margin: '0 0 15px 0' }}
          >
            ضمان الرضا الكامل
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '18px', color: 'var(--text-white)', opacity: 0.8, maxWidth: '600px', margin: '0 0 30px 0', lineHeight: 1.6 }}
          >
            نحن واثقون من جودة منتجنا لدرجة أننا نقدم لك ضمان رضا كامل. إذا لم تكن راضيًا عن النتائج، تواصل معنا وسنجد لك الحل الأمثل.
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start', margin: '0 auto', textAlign: 'right' }}>
            {points.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                style={{ fontSize: '16px', color: 'var(--text-white)' }}
              >
                {pt}
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
