import style from '@/styles/main.module.css';
import Link from "next/link";
import Image from 'next/image';
import React from "react";

const Main = ()  => {
    return(
    <div id='main' className={style.bg}>
        {/* Logo background */}
        <div className={style.logoPosition}>
            <Image src="/logo-grande.png" width={500} height={900} alt="logo" />
        </div>

        {/* Conteiner geral dos textos */}
        
        <div className={style.textGeral}>
            <h1 className={style.textBragi}>Bragi Estúdios</h1>
            <div className={style.flexRow}>
                <Image src="/hastag.png" width={86} height={86} alt='hastag'/>
                <h2 className={style.textSubBragi}>Nós criamos<br/>experiências</h2>
            </div>
            <p className={style.descricao}>Somos um pequeno<br/>estúdio baiano<br/>desenvolvendo jogos</p>
        <div>
    
        
        {/* Redes sociais */}
        <ul className={style.redes}>
            <li>
                <Link href="https://discord.gg/9C4Wh8TYef" target='_blank'>
                    <span className={style.hover}>
                        <Image src="/discord.svg" alt="discord" width={50} height={50}/>
                        </span>
                </Link>
            </li>
            <li>
                <Link href="https://www.tiktok.com/@bragiestudios" target='_blank'>
                    <Image  src="/tiktok.svg" alt="tiktok" width={42} height={42}/>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/bragiestudios/" target='_blank'>
                    <Image src="/instagram.svg" alt="insta" width={40} height={40}/>
                </Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/@bragiestudios" target='_blank'>
                    <Image src="/youtube.svg" alt="youtube" width={50} height={50}/>
                </Link>
            </li>
            <li>
                <Link href="https://twitter.com/bragiestudios" target='_blank'>
                    <Image src="/twitter.svg" alt="twitter" width={40} height={40}/>
                </Link>
            </li>
        </ul>
        </div>
        </div>
    </div>
    );
}

export default Main;
