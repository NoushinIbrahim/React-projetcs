import React, { useState, useEffect } from "react";
import "./Contact.css";

function Particles({ count = 40 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      });
    }
    setParticles(temp);
  }, [count]);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ✅ CONTACT COMPONENT */
function ContactComponent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact">
      <Particles count={40} />

      <div className="contact-content">
        <h2>Contact</h2>
        <p>Let’s talk about your project</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" required placeholder=" " />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input type="email" required placeholder=" " />
          <label>Email</label>
        </div>

        <div className="input-group">
          <textarea required placeholder=" "></textarea>
          <label>Message</label>
        </div>

        <button type="submit">Submit</button>

        {submitted && (
          <span className="success-msg">Message sent successfully!</span>
        )}
      </form>
    </div>
  );
}

export default ContactComponent;
