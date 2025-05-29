import React, { createContext, useContext, useState, ReactNode } from 'react';

type MobilePageContextType = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  resetPage: () => void;
};

const MobilePageContext = createContext<MobilePageContextType | undefined>(undefined);

export function MobilePageProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('home');

  const resetPage = () => setCurrentPage('home');

  return (
    <MobilePageContext.Provider value={{ currentPage, setCurrentPage, resetPage }}>
      {children}
    </MobilePageContext.Provider>
  );
}

export function useMobilePage() {
  const context = useContext(MobilePageContext);
  if (context === undefined) {
    throw new Error('useMobilePage must be used within a MobilePageProvider');
  }
  return context;
} 