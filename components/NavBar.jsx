/* eslint-disable react/prop-types */
import style from '@/styles/navbar.module.css'
import Link from "next/link";
import { useState } from 'react';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

import React from "react";

const NavBar = ({ selectedLanguage })  => {
  
  const t = selectedLanguage === 'en' ? en : pt;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <nav className={style.navbar}>
          <ul className={style.gridBotoes}>
            <li className={style.colunaLogo}>
              <Link href='/'>
                <img src={!isHovered ? './brg_icon.svg' : './brg_icon_houver_main.svg'} alt="Logo" width={64} height={50} className={style.tamanhoLogo}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}/>
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
