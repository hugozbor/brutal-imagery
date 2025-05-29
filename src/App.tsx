import React from 'react';
import { MobilePageProvider } from './context/MobilePageContext';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <MobilePageProvider>
      <Layout />
    </MobilePageProvider>
  );
}

export default App;
