import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import LoginScreen from './components/Login/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ?(
        <LoginScreen />
      ):(
        
        <Routes>
        <Route path="/about" element={About} />
        <Route path="/users" element={Users} />
        <Route path="/" element={HomeScreen} />
      </Routes>
      )}
      <div>
       
      </div>
    </div>
  );
}

export default App;
