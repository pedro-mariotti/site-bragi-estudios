import Image from 'next/image';
import { Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Main from '@/pages/Main';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bragi Estúdios</title>
        <meta name="description" content="Generate" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main />
    </div>
  );
}
