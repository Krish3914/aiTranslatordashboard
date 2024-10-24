import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="my-16 flex flex-col items-center center-horizontal"
      style={{ width: "40%", margin: "30px 30%" }}
    >
      <h4
        className="text-4xl font-bold text-teal-800 mb-4"
        style={{ margin: "7px 38%", color: "teal" }}
      >
        #Contact Us
      </h4>
      <h2 className="text-2xl text-100 mb-4" style={{ margin: "10px 32%" }}>
        Get In Touch
      </h2>
      <p style={{ fontWeight: "200", textAlign:"center" }}>
        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
        molestie vel, ornare non id blandit netus.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border rounded-lg"
          style={{ width: "70%", height: "40px", margin: "10px 15%" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full p-2 border rounded-lg my-4"
          style={{ width: "70%", height: "40px", margin: "10px 15%" }}
        />
        <textarea
          name="message"
          placeholder="Phone number *"
          value={formData.message}
          onChange={handleChange}
          className="block w-full p-2 border rounded-lg my-4"
          style={{ width: "70%", height: "40px", margin: "10px 15%" }}
        />
        <select
          className="border mt-6 p-2 rounded-md w-64"
          style={{ width: "70%", height: "40px", margin: "10px 15%" }}
        >
          <option value="">How did you find us?</option>
          <option value="en">LinkedIn</option>
          <option value="es">Direct Email</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4"
          style={{ width: "70%", height: "40px", margin: "10px 15%" }}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
