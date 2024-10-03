/*
File name: contact.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

import '../contact.css'
import '../index.css'

export default function Contact() {
  return (
    <section className="contact-wrapper">
      {/* Contact Information */}
      <div className="contact-container">
        <h2>Contact Information</h2>
        <p>
          Email:<a href="mailto:m.polishchuk@hotmail.ca">m.polishchuk@hotmail.ca</a> <br />
          Phone: &nbsp; (647) 962-5118 <br/>
          Location: &nbsp; Toronto, ON
        </p>
        <div>
            <ul>
              <li>
                <img src="/linkedin.png" alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/marta-polishchuk/">LinkedIn</a>
              </li>
              <li>
                <img src="/github.png" alt="GitHub" />
                <a href="https://github.com/martapolii">GitHub</a>
              </li>
            </ul>
          
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <label for="name">Name:</label><br/>
          <input type="text" id="name" name="name" required/><br/>

          <label for="email">Email:</label><br/>
          <input type="email" id="email" name="email" required/><br/>

          <label for="message">Message:</label><br/>
          <textarea id="message" name="message" required></textarea><br/>

          <input id="button" type="submit" value="Submit"/>

        </form>
      </div>
    </section>
  );
}
