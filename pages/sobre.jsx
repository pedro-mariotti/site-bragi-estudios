import { useState, useEffect } from 'react';
import React from 'react';
import SideMenu from '@/components/SideMenu';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

const Sobre = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || 'pt'
  );

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);
  
  const t = selectedLanguage === 'en' ? en : pt;

  const [data, setData] = useState('');

  useEffect(() => {
    // Defina o conteúdo padrão para o estado 'data'
    const defaultContent = generateDivContent('historia');
    setData(defaultContent);
  }, [selectedLanguage]); // Executa o useEffect apenas uma vez, no momento da montagem do componente

  const generateDivContent = (buttonId) => {
    if (buttonId === 'historia') {
      return (
        <div>
          <h1 className="text-lg font-medium text-orange">
            {t.sobre.historia.title}
          </h1>
          <p className="text-base font-medium">
            {t.sobre.historia.linha1}
            <br />
            <br />
            {t.sobre.historia.linha2}
            <br />
            <br />
            {t.sobre.historia.linha3}
          </p>
        </div>
      );
    } else if (buttonId === 'pilares') {
      return (
        <div>
          <h1 className="text-lg font-medium text-orange">
            {t.sobre.missao.title}
          </h1>
          <p className="text-base font-medium">
            {t.sobre.missao.texto}
            <br />
            <br />
          </p>
          <h2 className="text-lg font-medium text-orange">
            {t.sobre.visao.title}
          </h2>
          <p className="text-base font-medium"> {t.sobre.visao.texto}</p>
          <br />
          <h2 className="text-lg font-medium text-orange">
            {t.sobre.valores.title}
          </h2>
          <p className="text-base font-medium">
            {t.sobre.valores.criatividade}
          </p>
          <p className="text-base font-medium">{t.sobre.valores.construimos}</p>
          <p className="text-base font-medium">
            {t.sobre.valores.responsabilidade}
          </p>
          <p className="text-base font-medium">{t.sobre.valores.inclusao}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-base font-medium text-orange">Irlan Bragi</h1>
          <p>CEO, GameDev & GameDesigner</p>
          <br />

          <h1 className="text-base font-medium text-orange">Eduarda Bango</h1>
          <p>Game Producer</p>
          <br />

          <h1 className="text-base font-medium text-orange">Júlia Carneiro</h1>
          <p>GameDev Trainee</p>
          <br />

          <h1 className="text-base font-medium text-orange">Pedro Mariotti</h1>
          <p>GameDev Trainee</p>
          <br />

          <h1 className="text-base font-medium text-orange">Alef Torquato</h1>
          <p>GameDev Trainee & 2D Artist Trainee</p>
        </div>
      );
    }
  };

  const handleButtonClick = (event) => {
    const buttonId = event.target.id;
    const divContent = generateDivContent(buttonId);
    setData(divContent);
  };

  return (
    <div id="gallery">
      <div className="lg:h-screen h-max lg:grid w-full bg-preto bg-cover bg-top md:grid-cols-8">
        <div className="col-span-1 z-50">
          <SideMenu
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
        <div className="flex lg:h-full h-max flex-col-reverse items-center w-full col-span-4 pt-24 z-0">
          <img src="/bragi_equipe.png" alt="photo of the team" />
        </div>

        <div className="flex flex-col items-center justify-center lg:h-full gap-7 md:col-span-3 px-12 pb-24 w-full">
          <div className="text-purple z-20 w-full ">
            <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semimedium h-96 overflow-y-scroll sm:overflow-hidden w-full">
              <div className="text-lg h-max pb-4">
                <span className=" text-orange"></span>
              </div>
              <div className="flex flex-col gap-3">
                <div>{data}</div>
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-3 z-20 w-full ">
            <button
              id="historia"
              onClick={handleButtonClick}
              className="py-4 bg-[#3e2759] hover:bg-orange text-white transform cursor-pointer select-none z-[2] w-1/2 flex flex-col justify-center items-center"
            >
              <img
                src="/icon_historia.svg"
                alt="discord"
                width={60}
                height={60}
                className="mb-2"
              />
              {t.sobre.botoes.historia}
            </button>

            <button
              id="pilares"
              onClick={handleButtonClick}
              className="py-4 bg-[#3e2759]  hover:bg-orange text-white transform cursor-pointer select-none z-[2] w-1/2 flex flex-col justify-center items-center"
            >
              <img
                src="/icon_pilares.svg"
                alt="discord"
                width={60}
                height={60}
                className="mb-2"
              />
              {t.sobre.botoes.pilares}
            </button>

            <button
              id="time"
              onClick={handleButtonClick}
              className="py-4 bg-[#3e2759]  hover:bg-orange text-white transform cursor-pointer select-none z-[2] w-1/2 flex flex-col justify-center items-center"
            >
              <img
                src="/icon_time.svg"
                alt="discord"
                width={60}
                height={60}
                className="mt-2 mb-4"
              />
              {t.sobre.botoes.time}
            </button>
          </div>
        </div>
      </div>
      {/* <SideMenu/> */}
    </div>
  );
};

export default Sobre;
