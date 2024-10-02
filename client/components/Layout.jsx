/*
File name: Layout.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

// this file manages layout and navigation for the site

import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import outlet to render child routes

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/education">Education</Link> | 
        <Link to="/project">Project</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      <br/>
      <hr />

      {/* This will render the child components, otherwise only the nav bar is displayed */}
      <Outlet />
    </>
  );
}
