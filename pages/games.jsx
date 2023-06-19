
import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';

import React from 'react';

const Jogos = () => {
  return (
    <div className='bg-[#000]'>
      <div className="relative">
        <Slider slides={SliderData} />
      </div>
    </div>
    
  );
};

export default Jogos;
