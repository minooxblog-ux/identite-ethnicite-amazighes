import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function ResultsTimeline() {
  const containerRef = useRef(null)
  
  const results = [
    { period: 'الأسبوع 1-2', text: 'تحسن ملحوظ في تدفق الدم والصلابة', icon: '📈' },
    { period: 'الأسبوع 3-4', text: 'بداية ملاحظة زيادة في الحجم والطول', icon: '📊' },
    { period: 'الأسبوع 5-6', text: 'نتائج واضحة ومستمرة مع زيادة الثقة', icon: '🏆' },
    { period: 'الأسبوع 7-8', text: 'نتائج مثالية — حجم أكبر وأداء أفضل', icon: '⭐' }
  ]

  return (
    <section ref={containerRef} style={{ padding: '100px 20px', background: 'linear-gradient(to bottom, #111111, var(--bg-black))' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <motion.div
           initial={{ y: 30, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '40px', color: 'var(--text-white)', margin: '0 0 10px 0' }}>النتائج المتوقعة</h2>
          <p style={{ fontSize: '20px', color: 'var(--gold-primary)', margin: 0 }}>ماذا تتوقع مع الاستخدام المنتظم؟</p>
        </motion.div>

        <div className="timeline-container" style={{ position: 'relative' }}>
          {/* Horizontal Track (Desktop) */}
          <div className="timeline-track-desktop" style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', backgroundColor: 'rgba(201,168,76,0.2)', transform: 'translateY(-50%)', zIndex: 0 }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                height: '100%',
                backgroundColor: 'var(--gold-primary)',
                position: 'absolute',
                right: 0
              }}
            />
          </div>

          {/* Vertical Track (Mobile) */}
          <div className="timeline-track-mobile" style={{ position: 'absolute', top: 0, bottom: 0, right: '40px', width: '4px', backgroundColor: 'rgba(201,168,76,0.2)', zIndex: 0 }}>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                width: '100%',
                backgroundColor: 'var(--gold-primary)',
              }}
            />
          </div>

          <div className="timeline-nodes" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
            {results.map((res, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.3) }}
                className={`timeline-node ${i % 2 === 0 ? 'node-top' : 'node-bottom'}`}
              >
                <div className="node-content glass-panel">
                  <span style={{ fontSize: '28px', marginBottom: '10px', display: 'block' }}>{res.icon}</span>
                  <h4 style={{ color: 'var(--gold-primary)', margin: '0 0 5px 0', fontSize: '18px' }}>{res.period}</h4>
                  <p style={{ color: 'var(--text-offwhite)', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>{res.text}</p>
                </div>
                
                <div className="node-circle">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.1 + (i * 0.3) }}
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: 'var(--gold-primary)',
                      borderRadius: '50%',
                      boxShadow: '0 0 15px rgba(201,168,76,0.6)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', bounce: 0.4, delay: 1 }}
          style={{
            marginTop: '80px',
            border: '1px solid rgba(201,168,76,0.4)',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            backgroundColor: 'rgba(26,26,26,0.5)',
            boxShadow: 'inset 0 0 20px rgba(201,168,76,0.05)'
          }}
        >
          <span style={{ fontSize: '22px', color: 'var(--gold-primary)', fontWeight: 'bold' }}>
            أكثر من 10,000 رجل حققوا نتائج مذهلة — كن التالي!
          </span>
        </motion.div>
      </div>

      <style>{`
        .timeline-track-mobile { display: none; }
        .timeline-nodes {
          align-items: center;
        }
        .timeline-node {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .node-content {
          padding: 20px;
          border-radius: var(--radius-md);
          text-align: center;
          width: 90%;
          position: relative;
        }
        .node-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--bg-black);
          border-radius: 50%;
        }

        .node-top {
          flex-direction: column-reverse;
        }
        .node-top .node-content {
          margin-top: 30px;
        }
        .node-bottom .node-content {
          margin-bottom: 30px;
        }

        @media (max-width: 900px) {
          .timeline-track-desktop { display: none !important; }
          .timeline-track-mobile { display: block !important; }
          .timeline-nodes {
            flex-direction: column;
            gap: 40px;
          }
          .timeline-node {
            flex-direction: row-reverse !important;
            width: 100%;
            justify-content: flex-start;
          }
          .node-top .node-content, .node-bottom .node-content {
            margin: 0 !important;
            margin-left: 20px !important;
            width: calc(100% - 80px);
            text-align: right;
          }
          .node-circle {
            position: absolute;
            right: 22px; 
          }
        }
      `}</style>
    </section>
  )
}
