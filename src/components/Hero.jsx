import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2, Truck } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemFadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  // Generate random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }))

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px',
      paddingBottom: '40px',
      overflow: 'hidden'
    }}>
      {/* Background Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: ['0vh', '-20vh', '0vh'],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: 'var(--gold-primary)',
            borderRadius: '50%',
            zIndex: 0
          }}
        />
      ))}

      {/* Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '80vw',
        maxHeight: '1000px',
        maxWidth: '1000px',
        background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          
          {/* Text Content (Right Column) */}
          <motion.div 
            className="hero-text-container"
            style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemFadeRight} style={{ alignSelf: 'flex-start' }} className="hero-badge">
              <span style={{
                backgroundColor: 'var(--bg-charcoal)',
                border: '1px solid var(--gold-primary)',
                color: 'var(--gold-primary)',
                padding: '6px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🌿 تركيبة طبيعية 100%
              </span>
            </motion.div>

            <motion.h1 variants={itemFadeRight} style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--gold-primary)', lineHeight: 1.3, margin: 0 }}>
              زيت طبيعي مُكثّف للرجال
            </motion.h1>

            <motion.h2 variants={itemFadeRight} style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--text-white)', fontWeight: 'normal', margin: 0 }}>
              عزّز حجمك وثقتك بشكل طبيعي وآمن
            </motion.h2>

            <motion.p variants={itemFadeRight} className="hero-desc" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', lineHeight: 1.6 }}>
              زيت طبيعي مُكثّف يعمل على تعزيز حجم وطول العضو الذكري بشكل آمن وطبيعي، من خلال تحفيز الدورة الدموية وتحسين تمدد الأنسجة. مخصص للرجال الباحثين عن نتائج ملحوظة وثقة متزايدة في العلاقة الحميمية.
            </motion.p>

            <motion.div variants={containerVariants} className="hero-trust" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '10px' }}>
              <motion.div variants={itemFadeUp} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-offwhite)' }}>
                <CheckCircle2 size={18} color="var(--color-green)" /> نتائج خلال أسابيع
              </motion.div>
              <motion.div variants={itemFadeUp} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-offwhite)' }}>
                <ShieldCheck size={18} color="var(--color-green)" /> مكونات طبيعية
              </motion.div>
              <motion.div variants={itemFadeUp} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-offwhite)' }}>
                <Truck size={18} color="var(--color-green)" /> شحن سري
              </motion.div>
            </motion.div>

            <motion.div variants={itemFadeUp} className="hero-cta-wrapper" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'var(--gold-gradient)',
                  color: 'var(--bg-black)',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  padding: '18px 48px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: 'var(--shadow-gold)',
                  border: 'none',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  width: '100%',
                  maxWidth: '350px'
                }}
                onClick={() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                اطلب الآن بسعر خاص 🔥
              </motion.button>
              
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ color: 'var(--color-red)', fontSize: '14px', fontWeight: 'bold' }}
                className="hero-urgency"
              >
                ⚡ العرض ينتهي قريبًا — الكمية محدودة
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Content (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
          >
            {/* Image Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
              zIndex: 0
            }} />
            
            <motion.div
              animate={{ y: [-10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <img 
                src="/imgs/product.png" 
                alt="زيت الرجال الطبيعي" 
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(201,168,76,0.2))'
                }} 
              />
              {/* Reflection */}
              <img 
                src="/imgs/product.png" 
                alt="" 
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  objectFit: 'contain',
                  transform: 'scaleY(-1)',
                  opacity: 0.15,
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 40%, black 100%)',
                  maskImage: 'linear-gradient(to bottom, transparent 40%, black 100%)',
                  marginTop: '-20px'
                }} 
              />
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginTop: '20px' }}>
                10 مل — حجم مثالي للاستخدام
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-badge, .hero-cta-wrapper button {
            align-self: center !important;
          }
          .hero-trust {
            justify-content: center;
          }
          .hero-desc {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
