import Image from 'next/image';
import { useState } from 'react';
import { SliderData } from './SliderData';
import SideMenu from '@/components/SideMenu';
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
    <div id="gallery" className="relative w-screen h-screen overflow-hidden">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-200'
                : 'opacity-0'
            }
          >
            {index === current && (
              <div>
                {/* nao sei pq isso aq não aparece */}
                <div className="">
                  <img
                    src={slide.logo}
                    alt="game logo"
                    className="absolute max-w-7xl right-0"
                  />
                </div>

                {/* <Image
                  src={slide.image}
                  alt="/"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                /> */}
                <div className="text-purple z-20">
                  <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semibold">
                    <div className="text-lg">
                      <span className=" text-orange">{slide.titulo}</span> |{' '}
                      <span>{slide.ano}</span>
                    </div>
                    <div className="text-lg">{slide.descricao}</div>
                    <div className="">{slide.publisher}</div>
                  </div>
                </div>
              </div>
            )}

            <div className=" flex flex-row gap-3 z-20">
              <button
                onClick={previousData}
                className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2]"
              >
                {'<'} JOGO ANTERIOR
              </button>

              <button
                onClick={nextData}
                className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2]"
              >
                PRÓXIMO JOGO {'>'}
              </button>
            </div>
          </div>
        );
      })}

      {/* <SideMenu/> */}
    </div>
  );
};

export default Slider;
