import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/XXXXXXXXXXXX?text=مرحبًا، أريد الاستفسار عن زيت الرجال الطبيعي"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', bounce: 0.5, delay: 2 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px', 
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
        zIndex: 9999,
        color: '#fff',
        textDecoration: 'none'
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
      >
        <MessageCircle size={32} />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', bounce: 0.6, delay: 2.5 }}
        style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          backgroundColor: '#FF0000',
          color: '#FFF',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          border: '2px solid var(--bg-black)'
        }}
      >
        1
      </motion.div>
    </motion.a>
  )
}
