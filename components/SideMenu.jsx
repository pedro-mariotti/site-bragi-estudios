/* eslint-disable react/prop-types */
import React from 'react';
import style from '@/styles/menu.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SelectLanguage from '@/components/SelectLanguage';

import { BsChevronDown } from 'react-icons/Bs';
import { MdOutlineMenu } from 'react-icons/Md';

export default function SideMenu() {
  // Estado para controlar a abertura e fechamento do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sm:pt-12 sm:pl-12 h-max sm:w-max w-screen sm:static fixed z-50 self-center sm:self-start ">
      {/* Ícone do usuário */}
      <motion.div
        className="flex h-14 p-2 bg-[#3e2759] text-white transform cursor-pointer justify-center items-center"
        onClick={toggleMenu}
        // initial={{ width: '100%' }}
        // animate={{ width: menuOpen ? '14rem' : '5rem' }}
      >
        {menuOpen ? (
          <BsChevronDown size="4rem" color="white" cursor="pointer" />
        ) : (
          <MdOutlineMenu size="4rem" color="white" cursor="pointer" />
        )}
      </motion.div>
      {/* Renderiza o menu apenas se o estado 'menuOpen' for verdadeiro */}
      {menuOpen && (
        <motion.div
          id="burger"
          // initial={{ width: '100%' }}
          animate={
            {
              // width: menuOpen ? '100%' : '4rem',
            }
          }
          transition={{ duration: 0.5 }}
        >
          <div id="menu" className="sm:w-56 w-screen bg-purple">
            <ul className={style.content}>
              <li>
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    width={57}
                    height={59}
                    className={style.tamanhoLogo}
                  />
                </Link>
              </li>
              <li>
                <Link href="/jogos">JOGOS</Link>
              </li>
              <li>
                <Link href="/quemSomos">SOBRE</Link>
              </li>
              <li>
                <Link href="/contato">CONTATO</Link>
              </li>
              <li>
              <Link href='https://bragiestudios.com/press/' target="_blank">PRESS KIT</Link>
              </li>

              <li className="flex-row flex gap-3">
                <Link href="https://discord.gg/9C4Wh8TYef" target="_blank">
                  <span>
                    <img
                      src="discord.svg"
                      alt="discord"
                      width={50}
                      height={50}
                    />
                  </span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@bragiestudios"
                  target="_blank"
                >
                  <img src="tiktok.svg" alt="tiktok" width={50} height={50} />
                </Link>
                <Link
                  href="https://www.instagram.com/bragiestudios/"
                  target="_blank"
                >
                  <img src="instagram.svg" alt="insta" width={45} height={45} />
                </Link>
                <Link
                  href="https://www.youtube.com/@bragiestudios"
                  target="_blank"
                >
                  <img src="youtube.svg" alt="youtube" width={50} height={50} />
                </Link>
                <Link href="https://twitter.com/bragiestudios" target="_blank">
                  <img src="twitter.svg" alt="twitter" width={50} height={50} />
                </Link>
              </li>
              <li className="langs flex-row flex gap-3">
                <a href="#" language="english" className="active">
                  EN
                </a>
                <a href="#" language="ptBR">
                  PT
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
