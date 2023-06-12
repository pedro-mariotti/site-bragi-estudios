

import React from 'react';
import Head from 'next/head';
import Main from '@/pages/Main';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Bragi Estúdios</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main />
    </div>
  );
}
