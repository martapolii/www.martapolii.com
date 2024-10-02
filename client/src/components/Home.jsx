/*
File name: Home.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import '../index.css'

export default function Home() {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>

      {/* Mission Statement */}
      <section>
        <p>
        I am a second-year Software Engineering Technology Co-op student. Currently working on full-stack web development, Java programming, and advanced database concepts. Click the links below to learn more about me and my projects.
        </p>
        <div className="buttons">
          <button><a href="/about">About</a></button>
          <button><a href="/service">Services</a></button>
          <button><a href="/project">Projects</a></button>
          <button><a href="/contact">Contact</a></button>
        </div>
      </section> 
    </div>
  );
}

