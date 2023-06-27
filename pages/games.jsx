import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';

import React from 'react';

const Jogos = () => {
  return (
    <div className="bg-[#000] w-screen h-screen">
      <Slider slides={SliderData} />
    </div>
  );
};

export default Jogos;
