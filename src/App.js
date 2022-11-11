import './scss/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/content/pages/Home';
import Priser from './components/content/pages/Priser';

function App() {
  return (
    <div className="container">
      <Navigation />

      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/priser" element={<Priser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
