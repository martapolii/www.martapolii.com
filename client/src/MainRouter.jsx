/*
File name: MainRouter.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

//file to manage navigation between pages, by storing route paths (similar to anchor elements in html)

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; //HashRouter is better for static sites

// Importing components
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';
import Service from './components/service';
import Project from './components/project';
import Layout from './components/Layout';


const MainRouter = () => {
  return (
    <div>
      <Layout/>
        <Routes> 
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/project' element={<Project />} />
        </Routes>
    </div>
  );
};
export default MainRouter;
