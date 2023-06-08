/* eslint-disable react/prop-types */
import React from 'react';
import style from '@/styles/menu.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from 'next/image';
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
    
    <>
      <div>
        {/* Renderiza o menu apenas se o estado 'menuOpen' for verdadeiro */}
        {menuOpen && (
          <motion.div
            className='w-56 mb-[0.7rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className={style.menu}>
              <ul className={style.content}>
                <li>
                  <Link href='/'>
                    <Image src="/logo.png" alt="Logo" width={57} height={59} className={style.tamanhoLogo}/>
                  </Link>
                </li>
                <li>
                  <Link href='/jogos'>JOGOS</Link> 
                </li>
                <li>
                  <Link href='/quemSomos'>QUEM SOMOS</Link>
                </li>
                <li>
                  <Link href='/contato'>CONTATO</Link>
                </li>
                <li>
                  <Link href='/pressKit'>PRESS KIT</Link>
                </li>
                
              </ul>
            </div>
          </motion.div>
        )}
    </div>
    <div>
        {/* Ícone do usuário */}
        <motion.div
          className='flex w-72 h-14 p-2 bg-[#3e2759] text-white transform cursor-pointer justify-center items-center'
          
          onClick={toggleMenu}
          initial={{ width: '100%' }}
          animate={{ width: menuOpen ? '100%' : '60%' }}
          transition={{ duration: 0.5 }}
        >
          {menuOpen ? (
             <BsChevronDown size="4rem" color="white" cursor="pointer" />
          ) : (
            <MdOutlineMenu size="4rem" color="white" cursor="pointer" />
          )}
        </motion.div>
        
      </div>
    </>
  );
}
