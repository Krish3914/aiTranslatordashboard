import React from "react";
import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Beforefaq from "./components/Beforefaq";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        

        <FileUpload />

        <FeaturesSection />
        <Beforefaq/>
        <FAQ />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
