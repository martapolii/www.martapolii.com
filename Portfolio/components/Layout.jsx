/*
File name: Layout.jsx
Student name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024
*/

//component file to store common layout elements/components, such as the nav bar

import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/service">Service</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <hr />

    </>
  );
}