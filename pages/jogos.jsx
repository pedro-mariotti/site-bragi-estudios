
import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';
import React from 'react';

const Jogos = () => {
  return (
    <div className="relative">
      <Slider slides={SliderData} />
    </div>
  );
};

export default Jogos;
