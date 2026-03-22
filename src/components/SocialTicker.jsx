export default function SocialTicker() {
  const phrases = [
    "⭐⭐⭐⭐⭐ نتائج مذهلة",
    "🔥 أكثر من 10,000 عميل راضٍ",
    "✅ مكونات طبيعية 100%",
    "🚚 شحن سري إلى باب منزلك",
    "💪 نتائج خلال 2-4 أسابيع",
    "🔒 دفع آمن ومضمون"
  ];

  const tickerItems = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <section style={{
      width: '100%',
      padding: '16px 0',
      backgroundColor: '#111111',
      borderTop: '1px solid rgba(201,168,76,0.2)',
      borderBottom: '1px solid rgba(201,168,76,0.2)',
      overflow: 'hidden',
    }} dir="ltr">
      <div className="ticker-track">
        {tickerItems.map((phrase, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            whiteSpace: 'nowrap',
            fontSize: '16px',
            color: 'var(--text-offwhite)',
            fontFamily: 'var(--font-primary)'
          }} dir="rtl">
            <span>{phrase}</span>
            <span style={{ color: 'var(--gold-primary)' }}>◆</span>
          </div>
        ))}
      </div>
      
      <style>{`
        .ticker-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: tickerSlide 40s linear infinite;
        }

        @keyframes tickerSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
      `}</style>
    </section>
  )
}
