/*
File name: Layout.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

// this file manages layout and navigation for the site

import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
