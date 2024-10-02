/*
File name: contact.jsx
Student Name: Marta Polishchuk
Student ID: 301432299
Date: October 1, 2024 
 */

export default function Contact() {
  return (
    <>
    {/* Contact Information */}
    <div>
      <h2>Contact Information</h2>
      <p>
        Email: <a href="mailto:m.polishchuk@hotmail.ca">m.polishchuk@hotmail.ca</a> <br />
        Phone: (647) 962-5118 <br/>
        Location: Toronto, ON
      </p>
    </div>

    {/* Contact Form */}
    <div>
      <h2>Contact Me</h2>
      <form>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name" required/><br/>

        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/>

        <label for="message">Message:</label><br/>
        <textarea id="message" name="message" required></textarea><br/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
    </>
  );
}
