import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {  Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Users from './components/Users/Users';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <div>
        <Routes>
          <Route path="/about" element={About} />
          <Route path="/users" element={Users} />
          <Route path="/" element={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
