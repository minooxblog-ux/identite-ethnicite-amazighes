export default function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      backgroundColor: '#080808',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ fontSize: '20px', color: 'var(--gold-primary)', fontWeight: 'bold', marginBottom: '20px' }}>
          زيت الرجال الطبيعي
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', fontSize: '14px', color: 'var(--text-offwhite)', opacity: 0.6, marginBottom: '20px' }}>
          <a href="#" style={{ cursor: 'pointer' }}>سياسة الخصوصية</a>
          <span style={{ color: 'var(--gold-primary)' }}>•</span>
          <a href="#" style={{ cursor: 'pointer' }}>الشروط والأحكام</a>
          <span style={{ color: 'var(--gold-primary)' }}>•</span>
          <a href="#" style={{ cursor: 'pointer' }}>تواصل معنا</a>
        </div>

        <div style={{ fontSize: '12px', color: 'var(--text-offwhite)', opacity: 0.4, marginBottom: '10px' }}>
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>

        <div style={{ fontSize: '11px', color: 'var(--text-offwhite)', opacity: 0.3, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          النتائج قد تختلف من شخص لآخر. هذا المنتج ليس بديلاً عن الاستشارة الطبية. يرجى قراءة التعليمات بعناية قبل الاستخدام.
        </div>
      </div>
    </footer>
  )
}
