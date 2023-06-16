import { useState } from 'react';
import React from 'react';
import SideMenu from '@/components/SideMenu';
import en from '../locales/en.js';
import pt from '../locales/pt.js';
import HoverableImage from '../components/Hover';

const Contato = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const t = selectedLanguage === 'en' ? en : pt;

  return (
    <div id="gallery">
      <div className="flex grid lg:grid-cols-8 flex-col h-screen bg-preto bg-cover bg-top">
        <div className="col-span-1 z-50">
          <SideMenu
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
        <div className="self-end sm:pt-0 pt-24 col-span-4">
          <img src="/bragi_equipe.png" alt="" className="w-full lg:max-w-6xl" />
        </div>
        <div className="flex flex-col items-center justify-center px-12 col-span-3">
          <div className="text-purple z-20 w-full ">
            <div className="inline-block p-4 shadow-lg font-semibold ">
              <div className="text-lg h-max pb-4">
                <span className=" text-orange"></span>
              </div>
              <div className="flex flex-col gap-4 text-5xl text-white">
                {t.contato.title}
              </div>
              <br />
              <div className="flex flex-col gap-4 text-2xl text-white">
                {t.contato.div1}
              </div>
              <br />
              <div className="flex flex-col gap-4 text-2xl text-white">
              <a href="mailto:team@bragiestudios.com" className="flex flex-col gap-4 text-2xl text-white hover:text-[#d05424]">team@bragiestudios.com</a>
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-3 z-20 w-full">
            <ul className="m-4 flex-row flex gap-8 items-center">
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
      </div>
      {/* <SideMenu/> */}
    </div>
  );
};

export default Contato;
