import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
      <>
      <Component {...pageProps}/>
      
      </>
        
  )
}
