import React from "react";
import test from "../assets/testi.png";
import price from "../assets/price.png";

const Beforefaq = () => {
  return (
    <section id="testimonials" className="text-center my-16">
      <img
        src={test}
        alt="Real-time Translation"
        className="mx-auto mb-4"
        style={{ marginLeft: "5%" }}
        width="90%"
      />
      <img
        src={price}
        alt="Real-time Translation"
        className="mx-auto mb-4"
        style={{ marginLeft: "10%" }}
        width="80%"
      />
    </section>
  );
};

export default Beforefaq;
