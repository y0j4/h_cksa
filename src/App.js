import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'; 
import About from './components/about/About';
import Services from './components/services/Services';
import Work from './components/work/Work';

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Services />
        <Work />
      </main>
    </>
  )
}

export default App;
