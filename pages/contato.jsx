import { useState } from 'react';
import React from 'react';
import SideMenu from '@/components/SideMenu';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

const Contato = () => {
  
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const t = selectedLanguage === 'en' ? en : pt;

  return (
    <div id="gallery">
          <div
            className="h-screen flex sm:justify-between sm:items-start sm:flex-row flex-col w-full bg-[url('../public/bg-preto.png')] bg-cover bg-top">
                <SideMenu selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                />
                <div>
                    <img src="/bragi_equipe.png" alt="" className="max-w-5xl h-max" />
                </div>
                <div className="flex flex-col items-center justify-center h-full sm:w-[40rem] gap-7 px-12 sm:pl-0 pb-12 sm:pb-0 sm:pt-24 pt-8">
                  
                  <div className="text-purple z-20 w-full ">
                    <div className="inline-block p-4 shadow-lg font-semibold w-full h-full overflow-y-scroll sm:overflow-hidden">
                      <div className="text-lg h-max pb-4">
                        <span className=" text-orange"></span>
                      </div>
                      <div className="flex flex-col gap-4 text-5xl text-white">
                        FALE COM A GENTE :D
                      </div><br/>
                      <div className="flex flex-col gap-4 text-2xl text-white">Amamos conhecer pessoas que curtem os nossos jogos!</div><br/>
                      <div className="flex flex-col gap-4 text-2xl text-white">team@bragiestudios.com</div>
                    </div>
                  </div>
                  <div className=" flex flex-row gap-3 z-20 w-full">
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
      {/* <SideMenu/> */}
    </div>
  );
};

export default Contato;
