import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>yourmail@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>

          <div className="info-card">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Location</h3>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">
            <i className="fa-solid fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
