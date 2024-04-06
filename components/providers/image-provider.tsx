'use client';

import React, { createContext, useState } from 'react';

interface ImageContextType {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

type ImageContextProps = {
  children?: React.ReactNode;
};

const ImageContext = createContext<ImageContextType | null>(null);

const ImageProvider: React.FC<ImageContextProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageProvider };
