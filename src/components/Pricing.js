import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="my-16">
      <h2 className="text-2xl font-bold mb-4">
        Choose a Plan That Fits Your Needs
      </h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="border p-6">
          <h3>Basic Plan</h3>
          <p>Free translation up to 500 words per document.</p>
        </div>
        <div className="border p-6">
          <h3>Pro Plan</h3>
          <p>Unlimited translations for individuals and small businesses.</p>
        </div>
        <div className="border p-6">
          <h3>Enterprise Plan</h3>
          <p>Custom solutions for larger organizations with complex needs.</p>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Start Your Free Trial
      </button>
    </section>
  );
};

export default Pricing;
