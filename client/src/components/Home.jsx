/*
File name: Home.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import '../index.css'

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Mission Statement */}
      <section>
      <h2>Hello, I'm <span style={{color: '#53f2f2'}}>Marta</span>. Welcome to My Portfolio.</h2>
        <p>
        I am a second-year <span style={{color: '#FF69B4', fontWeight:'bold'}}>Software Engineering Technology Co-op student</span>. Currently working on full-stack web development, Java programming, and advanced database concepts. Click the links below to learn more about me and my projects.
        </p>
        <div className="buttons">
          <button><a href="/about">About</a></button>
          <button><a href="/service">Services</a></button>
          <button><a href="/project">Projects</a></button>
          <button><a href="/contact">Contact</a></button>
        </div>
      </section> 
      <img className="CheekyCode" src="./src/assets/coderFunction.png" alt="C# code snipet of an object of the Coder class defining variables that align with my hard/soft skills"/>
    </div>
  );
}

