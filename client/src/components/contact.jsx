/*
File name: contact.jsx
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
          Email:<a>Redacted.</a> <br />
          Phone: &nbsp; Redacted.<br/>
          Location: &nbsp; Redacted.
        </p>
        <div>
            <ul>
              <li>
                <img src="/assets/linkedin.png" alt="LinkedIn" />
                <a target="blank" href="https://www.linkedin.com/in/marta-polishchuk/">LinkedIn</a>
              </li>
              <li>
                <img src="/assets/github.png" alt="GitHub" />
                <a target="blank" href="https://github.com/martapolii">GitHub</a>
              </li>
            </ul>
          
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" id="name" name="name" required/><br/>

          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email" required/><br/>

          <label htmlFor="message">Message:</label><br/>
          <textarea id="message" name="message" required></textarea><br/>

          <input id="button" type="submit" value="Submit"/>

        </form>
      </div>
    </section>
  );
}
