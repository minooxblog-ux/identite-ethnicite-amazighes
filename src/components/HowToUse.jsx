import { motion } from 'framer-motion'

export default function HowToUse() {
  const steps = [
    { num: '1', title: 'ضع كمية صغيرة', desc: 'ضع بضع قطرات من الزيت على المنطقة المستهدفة', icon: '💧' },
    { num: '2', title: 'دلّك بلطف', desc: 'قم بتدليك الزيت بلطف بحركات دائرية حتى يتم امتصاصه بالكامل', icon: '🤲' },
    { num: '3', title: 'استمتع بالنتائج', desc: 'استخدم يوميًا أو حسب الحاجة للحصول على أفضل النتائج. سريع الامتصاص — عد لنشاطاتك فورًا', icon: '🎯' }
  ]

  return (
    <section style={{ padding: '100px 20px', background: 'linear-gradient(to bottom, #111111, var(--bg-black))' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '40px', color: 'var(--text-white)', margin: '0 0 10px 0' }}>طريقة الاستخدام</h2>
          <p style={{ fontSize: '20px', color: 'var(--gold-primary)', margin: 0 }}>3 خطوات بسيطة لنتائج مذهلة</p>
        </motion.div>

        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Vertical Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              right: '20px', /* RTL logical start */
              width: '2px',
              backgroundColor: 'var(--gold-primary)',
              transformOrigin: 'top',
              zIndex: 0
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 * (i + 1) }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '25px', position: 'relative', zIndex: 1 }}
            >
              {/* Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 + (0.3 * i) }}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold-primary)',
                  color: 'var(--bg-black)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(201,168,76,0.3)',
                  zIndex: 2
                }}
              >
                {step.num}
              </motion.div>

              {/* Text */}
              <div style={{ backgroundColor: 'var(--bg-charcoal)', padding: '25px', borderRadius: 'var(--radius-md)', flex: 1, border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '24px' }}>{step.icon}</span>
                  <h3 style={{ fontSize: '22px', color: 'var(--text-white)', margin: 0 }}>{step.title}</h3>
                </div>
                <p style={{ fontSize: '16px', color: 'var(--text-offwhite)', opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.4, delay: 1.5 }}
          style={{
            marginTop: '60px',
            backgroundColor: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.3)',
            padding: '25px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '60px auto 0 auto'
          }}
        >
          <span style={{ fontSize: '18px', color: 'var(--text-white)' }}>
            <span style={{ fontSize: '22px', marginLeft: '8px' }}>💡</span>
            <strong>نصيحة:</strong> للحصول على أفضل النتائج، استخدم الزيت بانتظام لمدة 4-6 أسابيع متواصلة
          </span>
        </motion.div>

      </div>
    </section>
  )
}
