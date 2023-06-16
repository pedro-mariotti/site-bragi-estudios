import React, { useState } from 'react';

import { useRouter } from 'next/router';

const SelectLanguage = () => {
  const router = useRouter();
  const { locale } = router;
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const changeLanguage = (e) => {
    const selectedLocale = e.target.value;
    setSelectedLanguage(selectedLocale);
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
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
          checked={selectedLanguage === 'pt'}
          className='hidden'
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
          checked={selectedLanguage === 'en'}
          className='hidden'
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
