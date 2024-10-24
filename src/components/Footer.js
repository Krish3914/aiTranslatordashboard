import React from "react";
import foot from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <img
        src={foot}
        alt="Real-time Translation"
        className="mx-auto mb-4"
        style={{ marginLeft: "5%" }}
        width="90%"
      />
    </footer>
  );
};

export default Footer;
