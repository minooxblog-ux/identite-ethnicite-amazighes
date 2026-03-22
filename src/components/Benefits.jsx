import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Benefits() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax offset for the numbers
  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30])

  const benefits = [
    { num: '01', icon: '🔹', title: 'زيادة الحجم تدريجيًا', desc: 'مع الاستخدام المنتظم، ستلاحظ زيادة تدريجية في الحجم والطول بشكل طبيعي وآمن دون أي آثار جانبية' },
    { num: '02', icon: '🔹', title: 'تحسين الصلابة والانتصاب', desc: 'يعمل على تحفيز تدفق الدم بشكل فعال مما يؤدي إلى انتصاب أقوى وأكثر صلابة واستمرارية' },
    { num: '03', icon: '🔹', title: 'تعزيز الثقة بالنفس', desc: 'الشعور بالرضا والثقة ينعكس إيجابيًا على أدائك في العلاقة الحميمية وحياتك اليومية' },
    { num: '04', icon: '🔹', title: 'تركيبة طبيعية آمنة', desc: 'مكونات طبيعية مختارة بعناية، لطيفة على البشرة ولا تسبب أي تهيج أو حساسية' },
    { num: '05', icon: '🔹', title: 'خالٍ من المواد الكيميائية', desc: 'لا يحتوي على أي مواد كيميائية قاسية أو ضارة أو روائح صناعية — آمن تمامًا للاستخدام المنتظم' }
  ]

  return (
    <section ref={containerRef} style={{ padding: '100px 20px', backgroundColor: 'var(--bg-black)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '40px', color: 'var(--gold-primary)', margin: '0 0 10px 0' }}>🚀 الفوائد</h2>
          <p style={{ fontSize: '20px', color: 'var(--text-offwhite)', margin: '0 0 20px 0' }}>لماذا يختار الآلاف زيتنا الطبيعي؟</p>
          <div style={{
            height: '2px', width: '80px', backgroundColor: 'var(--gold-primary)', margin: '0 auto', borderRadius: '1px'
          }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {benefits.map((ben, i) => (
            <motion.div
              key={i}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{
                background: 'linear-gradient(to left, #1A1A1A, #1E1E1E)',
                borderRight: '3px solid var(--gold-primary)', // logical start border in RTL
                borderRadius: 'var(--radius-md)',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '25px',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="benefit-card"
            >
              <motion.div 
                style={{ 
                  fontSize: '60px', 
                  fontWeight: 'bold', 
                  color: 'var(--gold-primary)', 
                  opacity: 0.2,
                  y: yParallax,
                  lineHeight: 1
                }}
              >
                {ben.num}
              </motion.div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{ben.icon}</span>
                  <h3 style={{ fontSize: '20px', color: 'var(--text-white)', margin: 0 }}>{ben.title}</h3>
                </div>
                <p style={{ fontSize: '16px', color: 'var(--text-offwhite)', opacity: 0.7, margin: 0 }}>
                  {ben.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .benefit-card {
            flex-direction: column;
            text-align: center;
            align-items: center !important;
          }
          .benefit-card h3 {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
