import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="my-16">
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="border p-6">
          <h3>Step 1</h3>
          <p>Upload Your Document</p>
        </div>
        <div className="border p-6">
          <h3>Step 2</h3>
          <p>AI processes the document</p>
        </div>
        <div className="border p-6">
          <h3>Step 3</h3>
          <p>Download the translated document</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
