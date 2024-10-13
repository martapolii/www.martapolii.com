/*
File name: Layout.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

// this file manages layout and navigation for the site
import '../index.css'
import React from 'react';
import { Link } from 'react-router-dom'; // Import outlet to render child routes

export default function Layout() {
  return (
    <section>
      <div className="header">
        <div className="header-components">
          <img className="logo" src="client\public\assets\logo2.png" alt="Logo"></img>
          <h1>MARTA POLISHCHUK</h1>
        </div>
        <nav>
          <Link to="/">HOME</Link>  
          <Link to="/about">ABOUT</Link> 
          <Link to="/service">SERVICES</Link> 
          <Link to="/project">PROJECTS</Link> 
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </section>
  );
}

