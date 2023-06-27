import { useState, useEffect } from 'react';
import React from 'react';
import Head from 'next/head';
import SideMenu from '@/components/SideMenu';
import en from '../locales/en.js';
import pt from '../locales/pt.js';
import HoverableImage from '../components/Hover.jsx';

const Contato = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      setSelectedLanguage(storedLanguage || 'pt');
    }
  }, []);

  const t = selectedLanguage === 'en' ? en : pt;

  return (
    <div id="gallery" className="bg-[#000] h-screen w-screen">
      <Head>
        <title>Bragi Estúdios - {t.paginas.contact}</title>
        <link rel="icon" href="/brg_icon.svg" />
      </Head>
      <div className="h-full w-full lg:grid lg:flex flex-col grid-cols-8 flex-col bg-preto bg-cover bg-top overflow-y-scroll lg:pb-0 pb-4 xl:overflow-hidden">
        <div className="col-span-1 z-50">
          <SideMenu
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
        <div className="self-end lg:pt-0 pt-24 col-span-4 w-full lg:w-full">
          <img src="/bragi_equipe.png" alt="" className="w-full" />
        </div>
        <div className="lg:grid grid-rows-3 items-center col-span-3 mx-12 lg:m-0 ">
          <div className="flex flex-col row-start-2 border lg:border-none border-white p-4 mb-4 lg:m-0 lg:p-0">
            <div className="text-purple z-20 pb-4">
              <div className="inline-block shadow-lg font-semibold ">
                <div className="text-lg h-max pb-4">
                  <span className=" text-orange"></span>
                </div>
                <div className="flex flex-col gap-4 text-4xl sm:text-5xl text-white w-full">
                  <h1>{t.contato.title}</h1>
                </div>
                <br />
                <div className="flex flex-col gap-4 sm:text-2xl text-xl text-white">
                  <h2>{t.contato.div1}</h2>
                </div>
                <br />
                <div className="flex flex-col gap-4 sm:text-2xl text-xl text-white">
                  <a
                    href="mailto:team@bragiestudios.com"
                    className="flex flex-col gap-4 sm:text-2xl text-lg text-white hover:text-[#d05424]"
                  >
                    team@bragiestudios.com
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-3 z-20 w-full">
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
          </div>
          <div className=" text-white row-start-3 sm:border-none border sm:p-0 p-4">
            <p className="font-bold sm:text-xl text-lg">
              {t.contato.curriculo}
            </p>
            <p className="sm:text-lg  text-sm">
              {t.contato.curriculo2}{' '}
              <a
                className="font-bold hover:text-[#d05424]"
                href="mailto:vagas@bragiestudios.com"
              >
                vagas@bragiestudios.com
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
      {/* <SideMenu/> */}
    </div>
  );
};

export default Contato;
