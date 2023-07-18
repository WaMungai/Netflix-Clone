import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import LoginScreen from './components/Login/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileScreen from './components/Profile/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
   const unsubscribe = auth.onAuthStateChanged(
    (userAuth) =>{
      if(userAuth){
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe;
  },[dispatch])
  
  return (
    <div className="app">
    {!user ? (
      <LoginScreen />
    ) : (
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    )}
    <div></div>
  </div>
  );
}

export default App;
