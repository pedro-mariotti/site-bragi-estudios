/* eslint-disable react/prop-types */
import React from 'react';
import HoverableImage from '../components/Hover';
import style from '@/styles/menu.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import en from '../locales/en.js';
import pt from '../locales/pt.js';
import SelectLanguage from '@/components/SelectLanguage';

import { BsChevronUp } from 'react-icons/Bs';
import { MdOutlineMenu } from 'react-icons/Md';

export default function SideMenu({ selectedLanguage, setSelectedLanguage }) {
  const t = selectedLanguage === 'en' ? en : pt;

  // Estado para controlar a abertura e fechamento do menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sm:pt-12 sm:pl-12 h-max sm:w-max w-screen lg:static fixed z-50 self-center sm:self-start ">
      {/* Ícone do usuário */}
      <motion.div
        className="flex h-14 p-2 mb-1 bg-[#3e2759] text-white transform cursor-pointer justify-center items-center"
        onClick={toggleMenu}
        // initial={{ width: '100%' }}
        // animate={{ width: menuOpen ? '14rem' : '5rem' }}
      >
        {menuOpen ? (
          <BsChevronUp size="4rem" color="white" cursor="pointer" />
        ) : (
          <MdOutlineMenu size="3rem" color="white" cursor="pointer" />
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
          <div id="menu" className={style.menu}>
            <ul className={style.content}>
              <Link href="/">
                <li>
                  <img
                    src="/brg_icon.svg"
                    alt="Logo"
                    width={57}
                    height={59}
                    className={style.tamanhoLogo}
                  />
                </li>
              </Link>
              <Link href="/games">
                <li>{t.navbar.jogos}</li>
              </Link>
              <Link href="/sobre">
                <li>{t.navbar.sobre}</li>
              </Link>
              <Link href="/contact">
                <li>{t.navbar.contato}</li>
              </Link>
              <Link href="https://bragiestudios.com/press/" target="_blank">
                <li>PRESS KIT</li>
              </Link>
            </ul>
            <ul className={style.content2}>
              <li className="flex-row flex gap-3 items-center">
                <Link href="https://discord.gg/9C4Wh8TYef" target="_blank">
                  <span>
                    <HoverableImage
                      src={{
                        default: '/redes_sociais/discord.svg',
                        hover: '/redes_sociais/discord_hover.svg',
                      }}
                      alt="discord"
                      width={60}
                      height={60}
                    />
                  </span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@bragiestudios"
                  target="_blank"
                >
                  <HoverableImage
                    src={{
                      default: '/redes_sociais/tt.svg',
                      hover: '/redes_sociais/tt_hover.svg',
                    }}
                    alt="tiktok"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/bragiestudios/"
                  target="_blank"
                >
                  <HoverableImage
                    src={{
                      default: '/redes_sociais/ig.svg',
                      hover: '/redes_sociais/ig_hover.svg',
                    }}
                    alt="instagram"
                    width={55}
                    height={55}
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@bragiestudios"
                  target="_blank"
                >
                  <HoverableImage
                    src={{
                      default: '/redes_sociais/yt.svg',
                      hover: '/redes_sociais/yt_hover.svg',
                    }}
                    alt="youtube"
                    width={65}
                    height={65}
                  />
                </Link>
                <Link href="https://twitter.com/bragiestudios" target="_blank">
                  <HoverableImage
                    src={{
                      default: '/redes_sociais/twitter.svg',
                      hover: '/redes_sociais/twitter_hover.svg',
                    }}
                    alt="twiter"
                    width={60}
                    height={60}
                  />
                </Link>
              </li>
              <li className="langs flex-row flex gap-3">
                <SelectLanguage
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                />
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
