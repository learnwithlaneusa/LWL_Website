import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import LearningGames from './pages/LearningGames';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services-scheduling" element={<Services />} />
          <Route path="/learning-games" element={<LearningGames />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
