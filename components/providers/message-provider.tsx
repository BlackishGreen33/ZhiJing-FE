'use client';

import React, { createContext, useState } from 'react';

interface ButtonContextType {
  clickCount: number;
  incrementClickCount: () => void;
}

type ButtonContextProps = {
  children?: React.ReactNode;
};

const ButtonContext = createContext<ButtonContextType | null>(null);

const ButtonProvider: React.FC<ButtonContextProps> = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <ButtonContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ButtonContext.Provider>
  );
};

export { ButtonContext, ButtonProvider };
