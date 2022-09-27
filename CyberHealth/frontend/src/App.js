import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import './App.css';
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>} exact></Route>
          <Route path="/SignupScreen" element={<SignupScreen/>}></Route>
          <Route path="/LoginScreen" element={<LoginScreen/>}></Route>
        </Routes>
      </Router>
    </>
    );
}

export default App;
