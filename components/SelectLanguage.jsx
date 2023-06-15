import React from 'react';
import { useRouter } from 'next/router';

const SelectLanguage = () => {
    const router = useRouter();
    const { locale } = router;
    
    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
    };

  return (
    <div className='langs flex-row flex gap-3 text-2xl'>
        <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="pt">PT-BR</option>
          </select>
    </div>
  );
};
export default SelectLanguage;



