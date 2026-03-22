import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Testimonials() {
  const [rating, setRating] = useState(0)
  const observerRef = useRef(null)
  
  // Custom counter effect triggered on mount (or view if we want)
  useEffect(() => {
    let current = 0
    const end = 4.9
    const interval = setInterval(() => {
      current += 0.2
      if (current >= end) {
        setRating(end)
        clearInterval(interval)
      } else {
        setRating(parseFloat(current.toFixed(1)))
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    { quote: "بعد 3 أسابيع من الاستخدام، لاحظت فرقًا حقيقيًا. زوجتي لاحظت الفرق أيضًا! منتج رائع وطبيعي", name: "أحمد م.", loc: "السعودية 🇸🇦" },
    { quote: "كنت متشككًا في البداية لكن النتائج أثبتت العكس. الصلابة تحسنت بشكل ملحوظ والحجم زاد فعلًا", name: "محمد ع.", loc: "الإمارات 🇦🇪" },
    { quote: "أفضل منتج استخدمته — طبيعي وبدون أي آثار جانبية. ثقتي بنفسي زادت كثيرًا", name: "خالد ر.", loc: "الكويت 🇰🇼" },
    { quote: "سريع الامتصاص ولا يترك أي أثر دهني. النتائج بدأت تظهر بعد أسبوعين. أنصح به بشدة", name: "عمر ف.", loc: "مصر 🇪🇬" },
    { quote: "الشحن كان سري تمامًا والتغليف ممتاز. المنتج فعال جدًا وأنا سعيد بالنتائج", name: "سعد ن.", loc: "البحرين 🇧🇭" }
  ]

  const scrollerRef = useRef(null)

  useEffect(() => {
    // Simple Auto-play carousel
    const interval = setInterval(() => {
      if (scrollerRef.current) {
        const { clientWidth, scrollWidth, scrollLeft } = scrollerRef.current
        const scrollAmount = clientWidth > 768 ? 370 : clientWidth
        
        // In RTL, scrollLeft is 0 or negative
        scrollerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        
        // Basic reset loop trigger if it hits boundary
        if (Math.abs(scrollLeft) + clientWidth >= scrollWidth - 10) {
          scrollerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        }
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ padding: '100px 20px', backgroundColor: 'var(--bg-black)', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        <motion.div
           initial={{ y: 30, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '40px', color: 'var(--gold-primary)', margin: '0 0 10px 0' }}>آراء عملائنا</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-offwhite)', margin: '0 0 20px 0' }}>تجارب حقيقية من رجال مثلك</p>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: 'var(--radius-full)' }}>
            <span style={{ color: 'var(--gold-primary)', letterSpacing: '2px' }}>⭐⭐⭐⭐⭐</span>
            <span style={{ color: 'var(--text-white)', fontWeight: 'bold' }}>{rating}/5 — بناءً على +500 تقييم</span>
          </div>
        </motion.div>

        <div 
          ref={scrollerRef}
          className="hide-scrollbar"
          style={{ 
            display: 'flex', 
            gap: '20px', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
            paddingBottom: '20px'
          }}
        >
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-panel"
              style={{
                flex: '0 0 350px',
                scrollSnapAlign: 'start',
                padding: '30px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                cursor: 'grab'
              }}
            >
              <div style={{ color: 'var(--gold-primary)', fontSize: '14px', letterSpacing: '2px' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '16px', color: 'var(--text-white)', fontStyle: 'italic', margin: 0, flex: 1, lineHeight: 1.6 }}>
                "{test.quote}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                <div>
                  <div style={{ color: 'var(--gold-primary)', fontWeight: 'bold', fontSize: '16px' }}>{test.name}</div>
                  <div style={{ color: 'var(--text-offwhite)', opacity: 0.7, fontSize: '14px' }}>{test.loc}</div>
                </div>
                <div style={{ color: 'var(--color-green)', fontSize: '12px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span>✅</span> مشتري موثق
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 768px) {
          .hide-scrollbar > div {
            flex: 0 0 85% !important;
          }
        }
      `}</style>
    </section>
  )
}
