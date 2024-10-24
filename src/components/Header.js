import React from "react";

const Header = () => {
  return (
    <header
      className="py-4 px-8 bg-white shadow-md"
      style={{
        width: "100%",
        height: "90px",
        padding: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        className="logo text-2xl font-bold text-teal-600"
        style={{
          width: "9%",
          height: "40px",
          padding: "10px",
          fontSize: "27px",
          color:"teal",
          marginLeft: "7%",
        }}
      >
        PDFSCRIBE
      </div>
      <nav
        className="space-x-6"
        style={{
          width: "25%",
          height: "60px",
          margin: "0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight:"90px"
        }}
      >
        <a href="#home" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#features" className="text-gray-600 hover:text-gray-900">
          Features
        </a>
        <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
          Testimonials
        </a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">
          About Us
        </a>
      </nav>
      <button
        className="bg-teal-600 text-white px-4 py-2 rounded-lg"
        style={{
          width: "7%",
          height: "40px",
          padding: "10px",
          fontSize: "17px",
          borderRadius:"10px",
          marginRight:"70px",
          border: "none",
          backgroundColor:"teal"
        }}
      >
        Get Started
      </button>
    </header>
  );
};

export default Header;
