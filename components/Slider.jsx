/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';
import SideMenu from './SideMenu';

const Slider = ({ slides }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  //const t = selectedLanguage === 'en' ? en : pt;

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
                <SideMenu
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                />
                <div className="flex flex-col items-center justify-center h-full sm:w-[40rem] gap-7 px-12 sm:pl-0 pb-12 sm:pb-0 sm:pt-24 pt-8">
                  <div
                    className={
                      index === 0
                        ? 'w-full h-96 flex items-center bg-gradient-to-r from-black-500 to-white-500 justify-center'
                        : 'w-full h-96 flex items-center justify-center'
                    }
                  >
                    <img
                      src={slide.logo}
                      alt="game logo"
                      className="w-96 h-max"
                    />
                  </div>
                  <div className="text-purple z-20 w-full">
                    <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semibold w-full h-72 overflow-y-scroll sm:overflow-hidden">
                      <div className="flex-wrap text-lg h-max pb-4 flex justify-between items-center">
                        <div>
                          <span className="text-orange">{slide.titulo}</span> |{' '}
                          <span>{slide.ano}</span>
                        </div>
                        <div className="flex gap-2 items-center font-normal text-sm">
                          {slide.released == 'true' && <p>Confira:</p>}
                          {slide.link_android !== '' && (
                            <Link href={slide.link_android} target="_blank">
                              <img
                                src="./Plataformas/android.svg"
                                alt="Android Logo"
                                width={32}
                                height={32}
                              />
                            </Link>
                          )}
                          {slide.link_apple !== '' && (
                            <Link href={slide.link_apple} target="_blank">
                              <img
                                src="./Plataformas/ios.svg"
                                alt="Apple Logo"
                                width={32}
                                height={32}
                              />
                            </Link>
                          )}
                          {slide.link_html !== '' && (
                            <Link href={slide.link_html} target="_blank">
                              <img
                                src="./Plataformas/html5.svg"
                                alt="Html5"
                                width={32}
                                height={32}
                              />
                            </Link>
                          )}
                          {slide.link_itchio !== '' && (
                            <Link href={slide.link_itchio} target="_blank">
                              <img
                                src="./Plataformas/itchio.svg"
                                alt="Html5"
                                width={32}
                                height={32}
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="text-lg">
                          {selectedLanguage === 'en'
                            ? slide.descricao_en
                            : slide.descricao_pt}
                        </div>
                        <div className="text-lg">
                          {selectedLanguage === 'en'
                            ? slide.publisher_en
                            : slide.publisher_pt}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-3 z-20 w-full">
                    <button
                      onClick={previousData}
                      className="py-4 bg-[#3e2759] hover:bg-orange text-white transform cursor-pointer select-none z-[2] w-1/2 p-7 flex items-center justify-center"
                    >
                      <img
                        src="previous_game.svg"
                        width={15}
                        height={15}
                        alt="anterior"
                      />
                      <span className="flex-grow text-center hidden sm:block">
                        JOGO ANTERIOR
                      </span>
                    </button>

                    <button
                      onClick={nextData}
                      className="py-4 bg-[#3e2759] hover:bg-orange text-white transform cursor-pointer select-none z-[2] w-1/2 p-7 flex items-center justify-center"
                    >
                      <span className="flex-grow text-center hidden sm:block">
                        PRÓXIMO JOGO
                      </span>
                      <img
                        src="next_game.svg"
                        width={15}
                        height={15}
                        alt="proximo"
                      />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
