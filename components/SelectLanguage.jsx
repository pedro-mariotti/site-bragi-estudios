/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import HoverableImage from '../components/Hover';

const SelectLanguage = ({ selectedLanguage, setSelectedLanguage }) => {
  const [setIsHovered] = useState(false);
  const isCheckedPT = selectedLanguage === 'pt';
  const isCheckedEN = selectedLanguage === 'en';

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e) => {
    const selectedLanguage = e.target.value;
    setSelectedLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []); // Executa somente uma vez ao montar o componente

  return (
    <div className="langs flex-row flex gap-3 text-2xl">
      <label htmlFor="pt" className="relative">
        <input
          onChange={handleClick}
          type="radio"
          id="pt"
          name="idioma"
          value="pt"
          className="hidden"
          checked={isCheckedPT}
        />
        <HoverableImage
          src={{
            default: isCheckedPT ? '/pt_checked.svg' : '/pt.svg',
            hover: '/pt_hover.svg',
          }}
          alt="Português"
          width={50}
          height={50}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </label>

      <label htmlFor="en" className="relative">
        <input
          onChange={handleClick}
          type="radio"
          id="en"
          name="idioma"
          value="en"
          className="hidden"
          checked={isCheckedEN}
        />
        <HoverableImage
          src={{
            default: isCheckedEN ? '/en_checked.svg' : '/en.svg',
            hover: '/en_hover.svg',
          }}
          alt="English"
          width={50}
          height={50}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </label>
    </div>
  );
};

export default SelectLanguage;
