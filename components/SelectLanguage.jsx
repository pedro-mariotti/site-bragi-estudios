/* eslint-disable react/prop-types */
import React from 'react';

const SelectLanguage = ({ selectedLanguage, setSelectedLanguage }) => {
  const changeLanguage = (e) => {
    const selectedLocale = e.target.value;
    setSelectedLanguage(selectedLocale);
  };

  return (
    <div className="langs flex-row flex gap-3 text-2xl">
      <label htmlFor="pt" className="relative">
        <input
          onChange={changeLanguage}
          type="radio"
          id="pt"
          name="idioma"
          value="pt"
          className="hidden"
        />
       <img
          id="pt-img"
          src={selectedLanguage === 'pt' ? '/pt_checked.svg' : '/pt.svg'}
          alt="Português"
          className="w-10 cursor-pointer mr-2"
        />
      </label>

      <label htmlFor="en" className="relative">
        <input
          onChange={changeLanguage}
          type="radio"
          id="en"
          name="idioma"
          value="en"
          className="hidden"
        />
         <img
          id="en-img"
          src={selectedLanguage === 'en' ? '/en_checked.svg' : '/en.svg'}
          alt="English"
          className="w-10 cursor-pointer"
        />
      </label>
    </div>
  );
};

export default SelectLanguage;
