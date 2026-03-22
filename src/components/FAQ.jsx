import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    { question: 'هل المنتج آمن للاستخدام؟', answer: 'نعم، المنتج مصنوع من مكونات طبيعية 100% وآمنة للبشرة. لا يحتوي على أي مواد كيميائية ضارة أو روائح صناعية. مناسب للاستخدام اليومي دون أي آثار جانبية.' },
    { question: 'متى تظهر النتائج؟', answer: 'تختلف النتائج من شخص لآخر، لكن معظم المستخدمين يلاحظون تحسنًا في الصلابة والأداء خلال 1-2 أسبوع، وزيادة ملحوظة في الحجم خلال 4-6 أسابيع من الاستخدام المنتظم.' },
    { question: 'كيف أستخدم المنتج؟', answer: 'ضع بضع قطرات من الزيت على المنطقة المستهدفة وقم بالتدليك بلطف بحركات دائرية حتى يتم الامتصاص الكامل. يمكن الاستخدام يوميًا أو حسب الحاجة.' },
    { question: 'هل الشحن سري؟', answer: 'نعم، نضمن شحنًا سريًا بالكامل. المنتج يصل في تغليف عادي بدون أي إشارة لمحتوى الطرد. خصوصيتك هي أولويتنا.' },
    { question: 'هل يمكنني الدفع عند الاستلام؟', answer: 'نعم، نوفر خيار الدفع عند الاستلام بالإضافة إلى الدفع الإلكتروني الآمن عبر البطاقات البنكية.' },
    { question: 'ما هو حجم العبوة؟', answer: 'العبوة 10 مل — حجم مثالي يكفي لاستخدام منتظم لمدة 4-6 أسابيع حسب معدل الاستخدام.' }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section style={{ padding: '100px 20px', backgroundColor: '#111111' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <motion.div
           initial={{ y: 30, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '36px', color: 'var(--text-white)', margin: '0 0 10px 0' }}>الأسئلة الشائعة</h2>
          <p style={{ fontSize: '18px', color: 'var(--gold-primary)', margin: 0 }}>كل ما تحتاج معرفته قبل الشراء</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            
            return (
              <motion.div
                key={i}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  backgroundColor: isOpen ? '#1e1e1e' : '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'background-color 0.3s'
                }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    color: 'var(--text-white)',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'right'
                  }}
                >
                  <span style={{ paddingLeft: '15px' }}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: 'var(--gold-primary)', display: 'flex', flexShrink: 0 }}
                  >
                    <Plus size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{
                        padding: '0 20px 20px 20px',
                        margin: 0,
                        fontSize: '16px',
                        color: 'var(--text-offwhite)',
                        opacity: 0.8,
                        lineHeight: 1.6
                      }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
