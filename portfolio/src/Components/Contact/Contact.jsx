import React from 'react';
import './Contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall, IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9b4b1e5f-6e45-43ab-98de-6145124428f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Contact With Me</h1>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm interested in freelance opportunities — especially ambitious or large projects.
            However, if you have other requests or questions, don't hesitate to use the contact form.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <MdOutlineMailOutline className="contact-icon" />
              <p>shubhamdubey05092001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCall className="contact-icon" />
              <p>+91 6307572804</p>
            </div>
            <div className="contact-detail">
              <IoLocationOutline className="contact-icon" />
              <p>Lucknow, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' />

          <label>Your Email</label>
          <input type="email" name="email" placeholder='Enter your email' />

          <label>Your Message</label>
          <textarea name="message"   rows="5"  placeholder='Enter your message'></textarea>

          <button  type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
