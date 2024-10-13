/*
File name: about.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */
import '../about.css'
import '../index.css'

export default function About() {
  return (
    <section className="about-wrapper">
      <img src="client\public\assets\headshot.jpg" alt="Headshot of Marta Polishchuk"></img>
      <div className="about-text">
        <h2>About Me</h2>
          <p>
            Hi, my name is <span className="bold">Marta Polishchuk</span>, i'm <span className="bold">26</span>, and I'm currently pursuing a <span className="bold">Software Engineering Technology Advanced Diploma</span> at Centennial College. I have hands-on experience in full-stack development, including proficiency in <span className="bold">C#</span>, <span className="bold">JavaScript</span>, <span className="bold">SQL</span>, and web technologies like <span className="bold">HTML</span> and <span className="bold">CSS</span>. I've <span className="bold">developed</span> and <span className="bold">maintained</span>websites, <span className="bold">designed databases</span>, and collaborated on team projects using <span className="bold">Agile</span> and <span className="bold">Scrum</span> methodologies. I'm particularly interested in leveraging my technical and problem-solving skills to contribute to a dynamic development team, and I'm seeking a co-op opportunity to further enhance my practical experience.
            </p>
        {/* button to view resume */}
        <a href="MartaPolishchuk_Resume.pdf" target="blank" rel="noopener noreferrer">
        <button>View Resume</button></a>
      </div>
    </section>
    
  );
}
