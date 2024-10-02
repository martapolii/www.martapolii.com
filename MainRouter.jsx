/*
File name: MainRouter.jsx
Student name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024
*/

//this file stores all the route paths/navigation for my webpages (similar to anchor element in html)

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home' //importing Home
import About from './about' //importing about
import Contact from './contact' //importing contact

const MainRouter = () => { 
    return (<div>
        <Routes>
          <Route exact path="/" element={<Home />} />  {/*Route for Home.jsx component*/}
          <Route exact path="/about" element={<About />} /> {/*Route for about.jsx component*/} 
          <Route exact path ="/contact" element={<Contact />} /> {/*Route for contact.jsx component*/}
        </Routes>
    </div>)
}
export default MainRouter