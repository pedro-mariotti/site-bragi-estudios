import { useState, useEffect } from 'react';
import React from 'react';
import SideMenu from '@/components/SideMenu';
import { useRouter } from 'next/router';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

const Sobre = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : pt;
    const [data, setData] = useState('');
  
    useEffect(() => {
      // Defina o conteúdo padrão para o estado 'data'
      const defaultContent = generateDivContent('historia');
      setData(defaultContent);
    }, [locale]); // Executa o useEffect apenas uma vez, no momento da montagem do componente

    const generateDivContent = (buttonId) => {
      if (buttonId === 'historia') {
        return (
          <div>
            <h1 className="text-lg font-bold text-orange">{t.sobre.historia.title}</h1>
            <p className="text-base font-medium">
              {t.sobre.historia.linha1}<br/><br/>
              {t.sobre.historia.linha2}<br/><br/>
              {t.sobre.historia.linha3}
            </p>
          </div>
        );
      } else if (buttonId === 'pilares') {
        return (
          <div>
            <h1 className="text-lg font-bold text-orange">{t.sobre.missao.title}</h1>
            <p className="text-base font-medium">
              {t.sobre.missao.texto}<br/><br/> 
            </p>
            <h2 className="text-lg font-bold text-orange">{t.sobre.visao.title}</h2>
            <p className="text-base font-medium"> {t.sobre.visao.texto}</p><br />
            <h2 className="text-lg font-bold text-orange">{t.sobre.valores.title}</h2>
            <p className="text-base font-medium">{t.sobre.valores.criatividade}</p>
            <p className="text-base font-medium">{t.sobre.valores.construimos}</p>
            <p className="text-base font-medium">{t.sobre.valores.responsabilidade}</p>
            <p className="text-base font-medium">{t.sobre.valores.inclusao}</p>
          </div>
        );
      } else {
        return (
          <div>
            <h1 className="text-lg font-bold text-orange">{t.sobre.time}</h1>
            <p>Conheça o time que faz acontecer!</p>

            <h1 className="text-base font-bold text-orange">Irlan Bragi</h1>
            <p>CEO, GameDev & GameDesigner</p><br/>

            <h1 className="text-base font-bold text-orange">Eduarda Bango</h1>
            <p>Game Producer</p><br/>

            <h1 className="text-base font-bold text-orange">Júlia Carneiro</h1>
            <p>GameDev Trainee</p><br/>

            <h1 className="text-base font-bold text-orange">Pedro Mariotti</h1>
            <p>GameDev Trainee</p><br/>

            <h1 className="text-base font-bold text-orange">Alef Torquato</h1>
            <p>GameDev Trainee & 2D Artist Trainee</p>
          </div>
        );
      }
    }

    const handleButtonClick = (event) => {
      const buttonId = event.target.id;
      const divContent = generateDivContent(buttonId);
      setData(divContent);
    };

  return (
    <div id="gallery">
          <div
            className="h-screen flex sm:justify-between sm:items-start sm:flex-row flex-col w-full bg-[url('../public/bg-preto.png')] bg-cover bg-top">
                <SideMenu />
                <div>
                    <img src="/bragi_equipe.png" alt="" className="max-w-5xl h-max" />
                </div>
                <div className="flex flex-col items-center justify-center h-full sm:w-[40rem] gap-7 px-12 sm:pl-0 pb-12 sm:pb-0 sm:pt-24 pt-8">
                  
                  <div className="text-purple z-20 w-full ">
                    <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semibold w-full h-96 overflow-y-scroll sm:overflow-hidden">
                      <div className="text-lg h-max pb-4">
                        <span className=" text-orange"></span>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div>{data}</div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-row gap-3 z-20 w-full">
                  <button
                      id='historia'
                      onClick={handleButtonClick}
                      className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
                  >
                      {t.sobre.botoes.historia}
                  </button>

                  <button
                      id='pilares'
                      onClick={handleButtonClick}
                      className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
                  >
                      {t.sobre.botoes.pilares} 
                  </button>

                  <button
                      id='time'
                      onClick={handleButtonClick}
                      className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
                  >
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
