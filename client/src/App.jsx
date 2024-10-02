/*
File name: App.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;

