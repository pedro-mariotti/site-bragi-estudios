import style from '@/styles/navbar.module.css'
import Link from "next/link";
import { useRouter } from 'next/router';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

import React from "react";

const NavBar = ()  => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  return (
    <div>
      <nav className={style.navbar}>
          <ul className={style.gridBotoes}>
            <li className={style.colunaLogo}>
              <Link href='/'>
                <img src="logo.png" alt="Logo" width={64} height={50} className={style.tamanhoLogo}/>
              </Link>
            </li>
            <li>
              <Link className={style.botoes} href='jogos'>{t.navbar.jogos}</Link> 
            </li>
            <li className='text-center'>
              <Link className={style.botoes} href='sobre'>{t.navbar.sobre}</Link>
            </li>
            <li>
              <Link className={style.botoes} href='contato'>{t.navbar.contato}</Link>
            </li>
            <li className='text-center'>
              <Link className={style.botoes} href='https://bragiestudios.com/press/' target="_blank">PRESS KIT</Link>
            </li>
          </ul>
        
      </nav>
    </div>
  );
}

export default NavBar;
