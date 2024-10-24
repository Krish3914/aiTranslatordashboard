import React, { useState, useRef } from "react";
import fileup from "../assets/fileupload.png";

const FileUpload = () => {
  const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {  
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // You can add further processing here, e.g., previewing the image.
    }
  };

  return (
    <section
      style={{ width: "50%", margin: "0 auto", padding:"0px 10%"}}
      className="flex flex-col items-center center-horizontal my-12"
    >
      <h4
        className="text-4xl font-bold text-teal-800 mb-4"
        style={{ margin: "7px 38%", color:"teal" }}
      >
        #AI-Powered Precision
      </h4>
      <h1
        className="text-4xl font-bold text-gray-800 mb-4"
        style={{ margin: "0px 12%" }}
      >
        Transform Your Documents with
      </h1>
      <h1
        className="text-4xl font-bold text-gray-800 mb-4 no-margin"
        style={{ margin: "11px 24%" }}
      >
        AI-Powered Precision
      </h1>
      <p
        className="text-gray-500 mb-8"
        style={{ margin: "10px 15%", fontSize: "21px" }}
      >
        Seamless, Accurate, and Fast Translations at Your Fingertips
      </p>
      <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg w-96 h-64 flex flex-col justify-center items-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-4"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
        />
        <img
          src={fileup}
          alt="Real-time Translation"
          className="mx-auto mb-4"
          width="100%"
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
        {file && <p className="text-sm mt-4">Selected: {file.name}</p>}
      </div>
      <select
        className="border mt-6 p-2 rounded-md w-64"
        style={{ width: "70%", height: "40px", margin: "0 15%" }}
      >
        <option value="">Choose Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more language options here */}
      </select>
      <br></br>
      <button
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg"
        style={{ width: "20%", height: "40px", margin: "20px 40%",  backgroundColor:"teal", borderRadius: "10px", border:"none"}}
      >
        Translate
      </button>
    </section>
  );
};

export default FileUpload;
