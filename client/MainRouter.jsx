/*
File name: MainRouter.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

//file to manage navigation between pages, by storing route paths (similar to anchor elements in html)

import React from 'react';
import { Route, Routes } from 'react-router-dom';

//importing components 
import Home from './components/Home';
import About from './about';
import Contact from './contact';
import Service from './service';
import Project from './project';

const MainRouter = () => {
  return (
    <div>
      <Routes>
        {/* routes that render each component*/}
        <Route exact path='/' element={<Home />} /> 
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
