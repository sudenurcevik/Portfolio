// Import necessary libraries and styles
import React, { useState } from "react";
import mailPhoto from "../../../assets/mail.gif";
import chat from "../../../assets/chat.png";
import "./ContactMe.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      access_key: "af31c3fa-f10e-4b35-a800-5f2fb57c11ac",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      // Clear form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="contactme-container">
      <div className="container" id="contact">
        <h2 className="heading">
          Get in touch <img src={chat} />
        </h2>
        <div className="form-container">
          <form onSubmit={onSubmit} className="contact-left">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-right">
            <img src={mailPhoto} alt="Mail" />
          </div>
        </div>
      </div>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer
        position="top-center"
        autoClose={5000} // 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default ContactMe;
