import { motion } from 'framer-motion'

export default function Ingredients() {
  const ingredients = [
    { icon: '🌿', title: 'مستخلصات نباتية طبيعية', desc: 'مكونات عشبية مستخرجة من أفضل المصادر الطبيعية لتحفيز نمو الأنسجة' },
    { icon: '🩸', title: 'محفزات الدورة الدموية', desc: 'مكونات فعالة تعزز تدفق الدم وتحسن التمدد الطبيعي للأنسجة' },
    { icon: '🛡️', title: 'زيوت مرطبة ومغذية', desc: 'زيوت طبيعية تحافظ على نعومة وصحة البشرة أثناء الاستخدام' }
  ]

  const badges = [
    "🔬 مختبر ومعتمد",
    "🌱 طبيعي 100%",
    "🚫 بدون كيماويات",
    "✅ آمن للبشرة"
  ]

  return (
    <section style={{ padding: '100px 20px', backgroundColor: 'var(--bg-black)' }}>
      <div className="container" style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
           }}
           style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '40px', color: 'var(--gold-primary)', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            مكونات طبيعية 100% 🌿
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-offwhite)', margin: 0 }}>كل مكون مختار بعناية لتحقيق أفضل النتائج</p>
        </motion.div>

        <div className="ingredients-grid" style={{
          display: 'grid',
          gap: '30px',
          width: '100%',
          marginBottom: '60px'
        }}>
          {ingredients.map((ing, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              style={{
                backgroundColor: 'var(--bg-charcoal)',
                borderTop: '3px solid var(--gold-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '35px 25px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{ing.icon}</div>
              <h3 style={{ fontSize: '20px', color: 'var(--text-white)', marginBottom: '15px' }}>{ing.title}</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-offwhite)', opacity: 0.7, margin: 0, lineHeight: 1.6 }}>{ing.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.5 } }
              }}
              style={{
                backgroundColor: '#111111',
                border: '1px solid var(--gold-primary)',
                color: 'var(--gold-primary)',
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ingredients-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .ingredients-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }
        @media (max-width: 600px) {
          .ingredients-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
