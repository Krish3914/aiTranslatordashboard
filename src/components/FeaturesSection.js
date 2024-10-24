import React from "react";
import features from "../assets/features.png";

const FeaturesSection = () => {
  return (
    <section id="features" className="text-center my-16">
      
      <img
            src={features}
            alt="Real-time Translation"
            className="mx-auto mb-4"
            width="100%"
          />
    </section>
  );
};

export default FeaturesSection;
