import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SelectLanguage from '../components/SelectLanguage';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const t = selectedLanguage === 'en' ? en : pt;

  return (
    <div
      id="main"
      className="h-max lg:h-screen flex justify-between flex-col bg-bragi-roxo bg-cover align-center"
    >
      {/* Logo background */}
      <div className="h-full flex flex-wrap w-screen items-start lg:items-end flex-col lg:flex-row-reverse justify-between gap-12 sm:gap-0">
        <div className="pt-8 self-end lg:self-start">
          <img src="/logo-grande.png" alt="logo" className="w-72 lg:w-96" />
        </div>

        {/* Conteiner geral dos textos */}
        <div className="flex flex-col pl-12 sm:pl-48 pb-14 sm:pb-28">
          <div className="flex flex-col gap-8 text-white">
          <SelectLanguage
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <h1 name="title" className="text-4xl sm:text-7xl font-bold mb-2">
              Bragi Estúdios
            </h1>
            <div className="flex items-center gap-4 font-bold uppercase sm:mb-2 sm:text-4xl">
              <img src="/hastag.png" alt="hashtag" />
              <h2 className="text-2xl sm:text-4xl">
                {t.titles.criamos} <br />
                {t.titles.exp}
              </h2>
            </div>
            <h3 className="uppercase font-semibold text-base sm:text-lg">
              {t.descricao.linha1}
              <br />
              {t.descricao.linha2}
              <br />
              {t.descricao.linha3}
              <br />
              {t.descricao.linha4}
            </h3>
            <div>
              {/* Redes sociais */}
              <ul className="flex-row flex gap-8">
                <li>
                  <a href="https://discord.gg/9C4Wh8TYef" target="_blank" rel="noreferrer">
                    <span>
                      <img
                        src="discord.svg"
                        alt="discord"
                        width={50}
                        height={50}
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@bragiestudios" target="_blank" rel="noreferrer">
                    <img
                      src="tiktok.svg"
                      alt="tiktok"
                      width={50}
                      height={50}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bragiestudios/" target="_blank" rel="noreferrer">
                    <img
                      src="instagram.svg"
                      alt="insta"
                      width={45}
                      height={45}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@bragiestudios" target="_blank" rel="noreferrer">
                    <img
                      src="youtube.svg"
                      alt="youtube"
                      width={50}
                      height={50}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bragiestudios" target="_blank" rel="noreferrer">
                    <img
                      src="twitter.svg"
                      alt="twitter"
                      width={50}
                      height={50}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Main;
