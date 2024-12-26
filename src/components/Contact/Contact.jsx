import React, { useState } from 'react';
import './Contact.css';
import call from '../../../src/assets/call_icon.svg';
import mail from '../../../src/assets/mail_icon.svg';
import location from '../../../src/assets/location_icon.svg';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      access_key: "2cb6f1cd-a87f-4fcf-abc5-ebaad7d0d840",
      name,
      email,
      message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const response = await res.json();

      if (response.success) {
        alert("Form submitted successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="side">
      <h1 className="title">Get in touch</h1>
      <div className="sidebar">
        <div className="left">
          <div className="contact-info">
            <h2 className="subtitle">Let's talk</h2>
            <p>
              I'm currently available to take on new projects, so feel free to send me a
              message about anything that you want me to work on. You can contact
              anytime.
            </p>
            <ul>
              <li>
                <a href="mailto:patelarpit2580@gmail.com">
                  <img src={mail} alt="Email Icon" className="icon" /> patelarpit2580@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919981886039">
                  <img src={call} alt="Phone Icon" className="icon" /> +91-9981-886-039
                </a>
              </li>
              <li>
                <img src={location} alt="Location Icon" className="icon" /> INDIA, Asia
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
