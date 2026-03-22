import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ProductShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const features = [
    "تركيبة طبيعية وآمنة 100%",
    "سريع الامتصاص — لا أثر دهني",
    "نتائج ملحوظة خلال أسابيع",
    "بدون مواد كيميائية ضارة",
    "بدون روائح صناعية",
    "مناسب للاستخدام اليومي"
  ]

  return (
    <section style={{
      padding: '100px 20px',
      background: 'linear-gradient(to bottom, var(--bg-black), #111111)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1100px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
        
        {/* Right Column (Text Content in RTL) */}
        <motion.div 
          className="showcase-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            style={{ fontSize: '14px', letterSpacing: '2px', color: 'var(--gold-primary)' }}
          >
            الحل الطبيعي
          </motion.div>
          
          <motion.h2 
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            style={{ fontSize: '40px', color: 'var(--text-white)', margin: 0, lineHeight: 1.2 }}
          >
            زيت الرجال الطبيعي — 10 مل
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '40px' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ height: '2px', backgroundColor: 'var(--gold-primary)' }}
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, x: 80 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
            style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, margin: 0 }}
          >
            زيت طبيعي مُكثّف يعمل على تعزيز حجم وطول العضو الذكري بشكل آمن وطبيعي، من خلال تحفيز الدورة الدموية وتحسين تمدد الأنسجة. تركيبة سريعة المفعول مصممة لتعمل بفعالية — بضع قطرات فقط تساعد على زيادة تدفق الدم وتعزيز نمو الأنسجة، مما يؤدي إلى نتائج أكثر سمكًا وطولًا وقوة.
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: 'var(--text-white)' }}
              >
                <Check size={20} color="var(--color-green)" strokeWidth={3} />
                {feat}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Left Column (Image in RTL) */}
        <motion.div 
          className="showcase-image"
          initial={{ opacity: 0, x: -80, rotate: -15 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{ flex: '1 1 350px', position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Radial Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 60%)',
            zIndex: 0
          }} />

          {/* Gold Frame Element */}
          <div style={{
            position: 'absolute',
            top: '10px',
            bottom: '-10px',
            left: '-10px',
            right: '10px',
            border: '2px solid rgba(201,168,76,0.6)',
            borderRadius: 'var(--radius-lg)',
            zIndex: 1
          }} />

          <img 
            src="/imgs/product.png" 
            alt="Product detail" 
            style={{
              width: '100%',
              maxWidth: '350px',
              height: 'auto',
              position: 'relative',
              zIndex: 2,
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
              borderRadius: 'var(--radius-lg)'
            }} 
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.6 }}
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px', // Visual left (or logical end)
              backgroundColor: 'var(--gold-primary)',
              color: 'var(--bg-black)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '18px',
              zIndex: 3,
              boxShadow: 'var(--shadow-gold-sm)'
            }}
          >
            10 مل
          </motion.div>
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .showcase-text {
            text-align: center;
            align-items: center;
          }
          .showcase-image {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  )
}
