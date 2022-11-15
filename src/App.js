import './scss/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/content/pages/Home';
import HarPriser from './components/content/pages/HarPriser';
import NeglePriser from './components/content/pages/NeglePriser';
import Footer from './components/Footer';
import Gallery from './components/content/pages/Gallery';


function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/priser/haar" element={<HarPriser />}></Route>
        <Route path = "/priser/negle" element={<NeglePriser />}></Route>
        <Route path = "/galleri" element={<Gallery />}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
