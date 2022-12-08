import React from'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Boutique from './components/Boutique';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Head from './components/Head';
import Home from './components/Home';
import Hypnose from './components/Hypnose';
import Navbar from './components/Navbar';
import Quisuisje from './components/Quisuisje';



function App() {
  return (
    <div style={{}}>
      <Head />
      <Navbar />
      <Home />
      <Hypnose />
      <Quisuisje />
      <Boutique />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
