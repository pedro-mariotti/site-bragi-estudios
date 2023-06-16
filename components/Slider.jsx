/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import SideMenu from './SideMenu';
import { useRouter } from 'next/router';
import React from 'react';
import en from '../locales/en.js';
import pt from '../locales/pt.js';

const Slider = ({ slides }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pt;

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextData = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousData = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      {slides.map((slide, index) => {
        
        return (
          <div
            key={index}
            className={index === current ? slide.image : 'hidden'}
          >
            {index === current && (
              
              <>
                <SideMenu />
                <div className="flex flex-col items-center justify-center h-full sm:w-[40rem] gap-7 px-12 sm:pl-0 pb-12 sm:pb-0 sm:pt-24 pt-8">
                  {/* nao sei pq isso aq não aparece */}
                  <div
                    className={
                      index === 0
                        ? 'w-full h-96 flex items-center bg-gradient-to-r from-black-500 to-white-500 justify-center' //condicional feita pra editar especificamente so o orbits
                        : 'w-full h-96 flex items-center justify-center'
                    }
                  >
                    <img
                      src={slide.logo}
                      alt="game logo"
                      className="w-96 h-max"
                    />
                  </div>
                  <div className="text-purple z-20 w-full ">
                    <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semibold w-full h-72 overflow-y-scroll sm:overflow-hidden">
                      <div className="text-lg h-max pb-4">
                        <span className=" text-orange">{slide.titulo}</span> |{' '}
                        <span>{slide.ano}</span>
                      </div>
                      <div className="flex flex-col gap-4">
                            <div className="text-lg">{locale == 'en' ? slide.descricao_en : slide.descricao_pt}</div>
                            <div className="text-lg">{locale == 'en' ? slide.publisher_en : slide.publisher_pt}</div>
                      </div>
                      
                    </div>
                  </div>
                  <div className=" flex flex-row gap-3 z-20 w-full">
                    <button
                      onClick={previousData}
                      className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
                    >
                      {'<'} JOGO ANTERIOR
                    </button>

                    <button
                      onClick={nextData}
                      className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
                    >
                      PRÓXIMO JOGO {'>'}
                    </button>
                  </div>
                </div>
              </>
              // <div className={slide.image}>
              // </div>
            )}
          </div>
        );
      })}
      {/* <SideMenu/> */}
    </div>
  );
};

export default Slider;
