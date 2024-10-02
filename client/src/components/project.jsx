/*
File name: project.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */
import '../project.css'

export default function Project() {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        <h3>PolishchukArt.com</h3>
        <img src="./src/assets/project1.png"></img>
        <a href="https://polishchukart.com/">https://polishchukart.com/</a>
        <p>
        This is a personal website project built for Ihor Polishchuk, a Toronto-based artist. The site showcases a gallery of his artwork, a CV highlighting his exhibitions, and contact information. The site uses HTML, CSS, and JavaScript for responsive design, gallery overlays, and mobile navigation. I created, deploy, and continue to maintain this website. 
        </p>
      </div>
      <div>
        <h3>Retail Database (SQL): The Mug Shop</h3>
        <img src="./src/assets/project2.png"></img>
        <p>I used SQL to design and implement a retail database that gave an Etsy store an efficient solution for inventory tracking and order management. I planned and executed requirements gathering, schema design, and ER modeling. I was able to run queries on customers, inventory data, and orders. </p>
      </div>
      <div>
        <h3>Bug Smasher Game</h3>
        <img src="./src/assets/project3.png"></img>
        <a href="https://studentweb.cencol.ca/mpolish3/COMP125/Assignment3/">https://studentweb.cencol.ca/mpolish3/COMP125/Assignment3/</a>
        <p>The Bug Smasher game is an interactive JavaScript-based web game where players click on moving bugs to smash them within a time limit. The game uses DOM manipulation and event handling to detect user input, update scores, and provide a dynamic, fun experience with animations and timed interactions.</p>
      </div>
    </>
  );
}
