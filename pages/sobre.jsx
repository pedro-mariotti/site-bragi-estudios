import aboutData from '@/components/aboutData';
import { useState } from 'react';
import React from 'react';

const Sobre = () => {
    const [data, setData] = useState('');
    const handleButtonClick = (event) => {
        const buttonId = event.target.id;
        let text = '';
    
        if (buttonId === 'historia') {
          text = aboutData.historia;
        } else if (buttonId === 'pilares') {
          text = aboutData.pilares
        } else {
          text = aboutData.time
        }
    
        setData(text);
      };
  return (
    <div id="gallery" className="w-screen h-screen">
        <div
            className="h-max lg:h-screen flex justify-between flex-col bg-[url('../public/about.png')] bg-cover bg-top">

            
    <div className="flex flex-col items-center justify-center h-full sm:w-[40rem] gap-7 pr-24 sm:pl-0 pl-24 sm:pt-24 pt-8">
       <div className="inline-block p-4 bg-[#ffffff] shadow-lg font-semibold w-full h-72 overflow-y-scroll sm:overflow-hidden">
            
            <div className="flex flex-col gap-4">
                <div className="text-lg">{data}</div>   
            </div>
        </div>
        <div className=" flex flex-row gap-3 z-20 w-full">
        <button
            id='historia'
            onClick={handleButtonClick}
            className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
        >
             HISTORIA
        </button>

        <button
            id='pilares'
            onClick={handleButtonClick}
            className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
        >
            PILARES 
        </button>

        <button
            id='time'
            onClick={handleButtonClick}
            className="py-4 bg-[#3e2759] text-white transform cursor-pointer select-none z-[2] w-1/2"
        >
            TIME 
        </button>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Sobre;
