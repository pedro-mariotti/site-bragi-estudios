
import Image from 'next/image';
import { useState } from 'react';
import { SliderData } from './SliderData';
import style from '@/styles/slider.module.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/io';

const Slider = ({slides})  => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextData = () => {
    setCurrent(current === length - 1? 0 : current + 1);
  }

  const previousData = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return (
    <div id='gallery' className='relative w-screen h-screen overflow-hidden'>
    
     {SliderData.map((slide, index) => {
        return (
          <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
            <button
              onClick={previousData}
              className='absolute top-[50%] left-[30px] inline-block max-w-lg p-4 rounded-lg bg-[#ffffff] transform -translate-y-1/2 black-white/70 cursor-pointer select-none z-[2]'
            >
              Anterior
            </button>
    
            {index === current &&(
              <div>
                <Image
                  src={slide.image}
                  alt='/'
                  fill
                  style={{objectFit:"cover", objectPosition:'center'}}
                />
                 <div className='absolute '>
                  <div className='absolute inline-block max-w-lg p-4 bg-[#ffffff] rounded-lg shadow-lg'>
                    <div className='text-lg text-black'>{slide.descricao}</div>
                  </div>
                </div>
              </div>
            ) }
           
            <button
              onClick={nextData}
              className='absolute top-[50%] right-[30px] inline-block max-w-lg p-4 rounded-lg bg-[#ffffff] transform -translate-y-1/2 black-white/70 cursor-pointer select-none z-[2]'
            >
              Próximo
            </button>
            
            

            
          </div>
        );
    })} 
      
    </div>
  );
}

export default Slider;
