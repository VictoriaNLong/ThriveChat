import React from 'react';
import { useState } from 'react';
import Chat from './Chat';

// import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from "./Login";
import { Register } from './Register';


function App() {
  const [currentForm, setCurrentForm] = useState('Login');
  const toggleForm = (formType) => {
    setCurrentForm(formType);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      

    </div>
  );
}






export default App;
