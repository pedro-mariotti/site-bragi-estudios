/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SelectLanguage from '../components/SelectLanguage';
import en from '../locales/en.js';
import pt from '../locales/pt.js';
import HoverableImage from '../components/Hover';

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      setSelectedLanguage(storedLanguage || 'pt');
    }
  }, []);

  const t = selectedLanguage === 'en' ? en : pt;

  return (
    <div
      id="main"
      className="main h-screen w-screen flex flex-col bg-bragi-roxo bg-cover align-center overflow-y-scroll gap-4 justify-between md:overflow-y-hidden lg:gap-0"
    >
      {/* Logo background */}
      <div className="w-full flex flex-col justify-between px-4 lg:flex-row-reverse lg:h-[90%] lg:px-0">
        <div className=" pt-8 self-end flex flex-col justify-between h-full items-end pb-4 lg:w-1/5 lg:self-start">
          <img src="/logo_main.svg" alt="logo" className="w-full" />
          <p className="bg-black p-2 rounded-2xl text-[12px] bg-opacity-30 lg:block hidden drop-shadow-none self-center">
            © Copyright 2018-2023 - Bragi Estúdios
          </p>
        </div>

        {/* Conteiner geral dos textos */}
        <div className="w-full flex self-center flex-col lg:ml-12 lg:w-1/4">
          <div className="flex flex-col gap-8 text-white">
            <SelectLanguage
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <link
              href="https://fonts.cdnfonts.com/css/century-gothic"
              rel="stylesheet"
            ></link>
            <h1 id="titleMain" className="text-5xl lg:text-7xl font-bold mb-2">
              {' '}
              Bragi Estúdios
            </h1>
            <div className="flex items-center gap-4 font-bold uppercase lg:mb-2 lg:text-4xl item">
              <img
                className="w-[4.5rem]"
                id="svg"
                src="/hashtag.svg"
                alt="hashtag"
              />
              <h2 className="text-2xl lg:text-4xl pb-[7px]">
                {t.titles.criamos} <br />
                {t.titles.exp}
              </h2>
            </div>
            <h3
              id="subTitleMain"
              className="uppercase font-semibold text-base lg:text-lg"
            >
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
              <ul className="flex-row flex gap-8 items-center">
                <li>
                  <a
                    href="https://discord.gg/9C4Wh8TYef"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <HoverableImage
                        src={{
                          default: '/redes_sociais/discord.svg',
                          hover: '/redes_sociais/discord_hover.svg',
                        }}
                        alt="discord"
                        width={50}
                        height={50}
                      />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@bragiestudios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HoverableImage
                      src={{
                        default: '/redes_sociais/tt.svg',
                        hover: '/redes_sociais/tt_hover.svg',
                      }}
                      alt="tiktok"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bragiestudios/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HoverableImage
                      src={{
                        default: '/redes_sociais/ig.svg',
                        hover: '/redes_sociais/ig_hover.svg',
                      }}
                      alt="instagram"
                      width={45}
                      height={45}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@bragiestudios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HoverableImage
                      src={{
                        default: '/redes_sociais/yt.svg',
                        hover: '/redes_sociais/yt_hover.svg',
                      }}
                      alt="youtube"
                      width={55}
                      height={55}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/bragiestudios"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HoverableImage
                      src={{
                        default: '/redes_sociais/twitter.svg',
                        hover: '/redes_sociais/twitter_hover.svg',
                      }}
                      alt="twiter"
                      width={50}
                      height={50}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <p className="bg-black w-max self-center p-2 rounded-2xl text-[12px] bg-opacity-30 lg:hidden block text-center drop-shadow-none">
              © Copyright 2018-2023 - Bragi Estúdios
            </p>
          </div>
        </div>
      </div>
      <NavBar
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
    </div>
  );
};

export default Main;
