import style from '@/styles/navbar.module.css'
import Link from "next/link";
import Image from 'next/image';
import React from "react";

const NavBar = ()  => {
  return (
    <div>
      <nav className={style.navbar}>
          <ul className={style.gridBotoes}>
            <li className={style.colunaLogo}>
              <Link href='/'>
                <Image src="/logo.png" alt="Logo" width={64} height={50} className={style.tamanhoLogo}/>
              </Link>
            </li>
            <li>
              <Link className={style.botoes} href='/jogos'>JOGOS</Link> 
            </li>
            <li className='text-center'>
              <Link className={style.botoes} href='/quemSomos'>QUEM SOMOS</Link>
            </li>
            <li>
              <Link className={style.botoes} href='/contato'>CONTATO</Link>
            </li>
            <li className='text-center'>
              <Link className={style.botoes} href='/pressKit'>PRESS KIT</Link>
            </li>
          </ul>
        
      </nav>
    </div>
  );
}

export default NavBar;
