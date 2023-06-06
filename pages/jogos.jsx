import Main from '@/pages/Main';
import Slider from '@/components/Slider';

import { SliderData } from '@/components/SliderData';
import React from 'react';

const jogos = () => {
  return (
    <div>
      <Slider slides={SliderData} />
    </div>
  );
};

export default jogos;
