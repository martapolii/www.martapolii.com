/*
File name: Home.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import '../index.css'
import { Link } from 'react-router-dom';

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
          <Link to="/about"><button>ABOUT</button></Link>
          <Link to="/service"><button>SERVICES</button></Link>
          <Link to="/project"><button>PROJECTS</button></Link>
          <Link to="/contact"><button>CONTACT</button></Link>
        </div>
      </section> 
      <img className="CheekyCode" src="/assets/coderFunction.png" alt="C# code snipet of an object of the Coder class defining variables that align with my hard/soft skills"/>
    </div>
  );
}

