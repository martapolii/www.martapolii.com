/*
File name: project.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import "../project.css";
import "../index.css";
import React from "react";

export default function Project() {
  //Image files are in array because I wanted to make a carousel - will implement this in my own time.
  const proj1Imgs = [
    "./src/assets/project1.png",
    "./src/assets/project1b.png",
    "./src/assets/project1c.png",
  ];

  const proj2Imgs = [
    "./src/assets/project2.png",
    "./src/assets/project2b.png",
    "./src/assets/project2c.png",
  ];

  const proj3Imgs = [
    "./src/assets/project3.png",
    "./src/assets/project3b.png",
    "./src/assets/project3c.png",
  ];

  return (
    <section className="projects-wrapper">
      <h2>My Projects</h2>

      {/* Project 1: PolishchukArt.com */}
      <div className="project">
        <h3>PolishchukArt.com</h3>
        <div className="carousel">
          <img src={proj1Imgs[0]} alt="PolishchukArt.com" />
          <img src={proj1Imgs[1]} alt="PolishchukArt.com" />
          <img src={proj1Imgs[2]} alt="PolishchukArt.com" />
        </div>
        <div>
          <a href="https://polishchukart.com/" target="blank">
            https://polishchukart.com/
          </a>
          <p>
            This is a personal website project built for Ihor Polishchuk, a
            Toronto-based artist. The site showcases a gallery of his artwork, a
            CV highlighting his exhibitions, and contact information. The site
            uses <span className="bold">HTML</span>,{" "}
            <span className="bold">CSS</span>, and{" "}
            <span className="bold">JavaScript</span> for{" "}
            <span className="bold">responsive design</span>,{" "}
            <span className="bold">gallery overlays</span>, and{" "}
            <span className="bold">mobile navigation</span>. I created, deploy,
            and continue to maintain this website.
          </p>
        </div>
      </div>

      {/* Project 2: Retail Database (SQL): The Mug Shop */}
      <div className="project">
        <h3>Retail Database (SQL): The Mug Shop</h3>
        <div className="carousel">
          <img src={proj2Imgs[0]} alt="The Mug Shop" />
          <img src={proj2Imgs[1]} alt="The Mug Shop" />
          <img src={proj2Imgs[2]} alt="The Mug Shop" />
        </div>
        <div>
          <p>
            I used <span className="bold">SQL</span> to design and implement a
            retail database that gave an Etsy store an efficient solution for
            inventory tracking and order management. I planned and executed{" "}
            <span className="bold">requirements gathering</span>,{" "}
            <span className="bold">schema design</span>, and{" "}
            <span className="bold">ER modeling</span>. I was able to run queries
            on customers, inventory data, and orders.
          </p>
        </div>
      </div>

      {/* Project 3: Bug Smasher Game */}
      <div className="project">
        <h3>Bug Smasher Game</h3>
        <div className="carousel">
          <img src={proj3Imgs[0]} alt="Bug Smasher Game" />
          <img src={proj3Imgs[1]} alt="Bug Smasher Game" />
          <img src={proj3Imgs[2]} alt="Bug Smasher Game" />
        </div>
        <div>
          <a
            href="https://studentweb.cencol.ca/mpolish3/COMP125/Assignment3/"
            target="blank"
          >
            https://studentweb.cencol.ca/mpolish3/COMP125/Assignment3/
          </a>
          <p>
            The Bug Smasher game is an interactive{" "}
            <span className="bold">JavaScript</span>-based web game where
            players click on moving bugs to smash them within a time limit. The
            game uses <span className="bold">DOM manipulation</span> and{" "}
            <span className="bold">event handling</span> to detect user input,
            update scores, and provide a dynamic, fun experience with animations
            and timed interactions.
          </p>
        </div>
      </div>
    </section>
  );
}
