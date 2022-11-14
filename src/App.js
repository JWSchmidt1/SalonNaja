import './scss/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/content/pages/Home';
import HarPriser from './components/content/pages/HarPriser';
import NeglePriser from './components/content/pages/NeglePriser';


function App() {
  return (
    <div className="container">
      <Navigation />

      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/priser/haar" element={<HarPriser />}></Route>
        <Route path = "/priser/negle" element={<NeglePriser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
