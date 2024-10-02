/*
File name: MainRouter.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

//file to manage navigation between pages, by storing route paths (similar to anchor elements in html)

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importing components
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Service from './src/contact';
import Project from './src/project';
import Layout from './components/Layout';


const MainRouter = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/project' element={<Project />} />
        </Routes>
      </Layout>
    </div>
  );
};
export default MainRouter;
