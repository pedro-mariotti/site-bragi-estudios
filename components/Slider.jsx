/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Image from 'next/image';
import { useState } from 'react';


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
    
     {slides.map((slide, index) => {
        return (
          <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
            
            
            {index === current &&(
              <div>
                {/* nao sei pq isso aq não aparece */}
                <div className='absolute right-0 z-10'>
                  <Image 
                    src={slide.logo}
                    alt='/'
                    width={1200}
                    height={900}
                  />
                </div>

                <Image
                  src={slide.image}
                  alt='/'
                  fill
                  style={{objectFit:"cover", objectPosition:'center'}}
                />
                 <div className='absolute top-[45%] right-[3.5%] text-purple z-20'>
                 <div className='inline-block w-[608px] h-[250px] p-4 bg-[#ffffff] shadow-lg font-semibold'>
                    <div className='text-lg'>
                      <span className=' text-orange'>{slide.titulo}</span> | <span>{slide.ano}</span>
                    </div>
                    <div className='text-lg'>{slide.descricao}</div>
                    <div className='absolute top-[75%]'>{slide.publisher}</div>
                  </div>
                </div>
              </div>
            ) }
            
            <div className='absolute top-[82%] right-[3.5%] flex flex-row gap-3 z-20'>
            <button
                onClick={previousData}
                className='w-[298px] h-[50px] bg-[#3e2759] text-white transform cursor-pointer select-none z-[2]'
              >
                {'<'} JOGO ANTERIOR
              </button>

              <button
                onClick={nextData}
                className='w-[298px] h-[50px] bg-[#3e2759] text-white transform cursor-pointer select-none z-[2]'
              >
                PRÓXIMO JOGO {'>'}
              </button>
           </div>
          </div>
        );
    })} 

   
    
    </div>
    
  );
}

export default Slider;
