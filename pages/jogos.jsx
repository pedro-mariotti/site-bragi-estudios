
import SideMenu from '@/components/SideMenu';
import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';
import React from 'react';

const Jogos = () => {
  return (
    <div className='relative' >
    <div className='absolute bottom-0 left-0 z-10 ml-12 mb-12'>
        <SideMenu />
    </div>
    <Slider slides={SliderData} />
  </div>
  );
};

export default Jogos;
