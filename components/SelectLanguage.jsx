import React from 'react';

const I18N_STORAGE_KEY = 'i18nextLng';

const SelectLanguage = () => {
    
    const handleSelectChange = (event) => {
        const language = event.target.getAttribute('language');
        localStorage.setItem(I18N_STORAGE_KEY, language);
        // eslint-disable-next-line no-self-assign
        window.location = window.location;
    }

  return (
    <div className='langs flex-row flex gap-3 text-2xl'>
        <span onClick={handleSelectChange} language="en-US" className="active">EN</span>
        <span onClick={handleSelectChange} language="pt-BR">PT</span>
    </div>
  );
};
export default SelectLanguage;



