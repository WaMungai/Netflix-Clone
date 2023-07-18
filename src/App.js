import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Users from './components/Users/Users';
import Home from './components/Home/Home';
import LoginScreen from './components/Login/LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null;
  useEffect(() =>{
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //Logged in
        console.log(userAuth)
      }else{
        //Logged out
      }
    })
    return unsubscribe;
  },[])
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
