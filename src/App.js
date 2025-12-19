import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Photography from './pages/Photography';
import ComputerScience from './pages/ComputerScience';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/photography" element={<Photography />} />
            {/* <Route path="/computer-science" element={<ComputerScience />} /> */}
            {/* <Route path="/about" element={<AboutMe />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
