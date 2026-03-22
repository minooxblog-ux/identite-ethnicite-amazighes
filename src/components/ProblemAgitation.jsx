import { motion } from 'framer-motion'

export default function ProblemAgitation() {
  const problems = [
    {
      icon: '😔',
      title: 'عدم الرضا عن الحجم',
      desc: 'الشعور بعدم الثقة بسبب الحجم يؤثر على العلاقة الحميمية والأداء العام'
    },
    {
      icon: '😓',
      title: 'ضعف الانتصاب والصلابة',
      desc: 'صعوبة في الحفاظ على انتصاب قوي وطويل الأمد خلال العلاقة'
    },
    {
      icon: '😞',
      title: 'فقدان الثقة بالنفس',
      desc: 'التأثير النفسي السلبي الذي ينعكس على الحياة اليومية والعلاقات'
    },
    {
      icon: '⚠️',
      title: 'الخوف من المنتجات الكيميائية',
      desc: 'القلق من الآثار الجانبية للمنتجات الصناعية والكيميائية الضارة'
    }
  ]

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'var(--bg-black)' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.h2 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '38px', color: 'var(--text-white)', textAlign: 'center', marginBottom: '15px' }}
        >
          هل تعاني من هذه المشاكل؟
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '60px' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            height: '3px',
            backgroundColor: 'var(--gold-primary)',
            boxShadow: '0 0 10px rgba(201,168,76,0.5)',
            marginBottom: '50px',
            borderRadius: '2px'
          }}
        />

        <div className="problems-grid" style={{
          display: 'grid',
          gap: '24px',
          width: '100%',
          marginBottom: '50px'
        }}>
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '30px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              <div style={{ fontSize: '40px', filter: 'drop-shadow(0 4px 6px rgba(139,26,26,0.3))' }}>{prob.icon}</div>
              <h3 style={{ fontSize: '20px', color: 'var(--text-white)', margin: 0 }}>{prob.title}</h3>
              <p style={{ fontSize: '16px', color: 'var(--text-offwhite)', opacity: 0.7, margin: 0 }}>{prob.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            fontSize: '22px',
            color: 'var(--gold-primary)',
            fontStyle: 'italic',
            textAlign: 'center',
            margin: 0
          }}
        >
          لهذا السبب ابتكرنا الحل الطبيعي الأمثل...
        </motion.p>
      </div>

      <style>{`
        .problems-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 600px) {
          .problems-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
