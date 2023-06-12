/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';

const Slider = ({ slides }) => {
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
    <div id="gallery" className="w-screen h-screen overflow-hidden">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? slide.image : 'opacity-0'}
          >
            {index === current && (
              // <div className={slide.image}>
              <div className="flex flex-col items-center justify-center h-full sm:w-[40rem] gap-7 pr-24 sm:pl-0 pl-24 sm:pt-24 pt-8">
                {/* nao sei pq isso aq não aparece */}
                <div
                  className={
                    index === 0
                      ? 'w-full h-96 flex items-center bg-gradient-to-r from-black-500 to-white-500 justify-center' //condicional feita pra editar especificamente so o orbits
                      : 'w-full h-96 flex items-center justify-center'
                  }
                >
                  <img src={slide.logo} alt="game logo" className="w-96" />
                </div>
                <div className="text-purple z-20 w-full ">
                  <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semibold w-full h-72 overflow-y-scroll sm:overflow-hidden">
                    <div className="text-lg">
                      <span className=" text-orange">{slide.titulo}</span> |{' '}
                      <span>{slide.ano}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="text-lg">{slide.descricao}</div>
                      <div className="">{slide.publisher}</div>
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
