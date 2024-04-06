'use client';

import React, { createContext, useState } from 'react';

interface UnderstandContextType {
  isUnderstand: boolean;
  setIsUnderstand: React.Dispatch<React.SetStateAction<boolean>>;
}

type UnderstandContextProps = {
  children?: React.ReactNode;
};

const UnderstandContext = createContext<UnderstandContextType | null>(null);

const UnderstandProvider: React.FC<UnderstandContextProps> = ({ children }) => {
  const [isUnderstand, setIsUnderstand] = useState(false);

  return (
    <UnderstandContext.Provider value={{ isUnderstand, setIsUnderstand }}>
      {children}
    </UnderstandContext.Provider>
  );
};

export { UnderstandContext, UnderstandProvider };
