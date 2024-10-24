import React from "react";
import faq from "../assets/faq.png";

const FAQ = () => {
  return (
    <section id="faq" className="my-16">
      <img
        src={faq}
        alt="Real-time Translation"
        className="mx-auto mb-4"
        style={{ marginLeft: "20%" }}
        width="60%"
      />
    </section>
  );
};

export default FAQ;
