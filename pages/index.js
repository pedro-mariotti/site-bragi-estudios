
import React from 'react';
import Head from 'next/head';
import Main from '@/pages/Main';

export default function Home() {
  return (
    <div className='bg-[#3E2759]'>
      <Head>
        <title>Bragi Estúdios</title>
        <link rel="icon" href="/brg_icon.svg" />
      </Head>
      <Main />
    </div>
  );
}
