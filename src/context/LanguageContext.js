import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext;

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({children}) => {
  const [english, setEnglish] = useState(true);

  return (
    <LanguageContext.Provider value={{english, setEnglish}}>
      {children}
    </LanguageContext.Provider>
  )
}
