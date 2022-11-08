import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/content/pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="container">
      <Navigation />

      <Routes>
        <Route path = "/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
