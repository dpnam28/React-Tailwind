import React, { use, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CompanySection from "./components/CompanySection";
import Services from "./components/ServicesSection/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative">
      <Suspense fallback="">
        <Toaster />
        <NavBar theme={theme} setTheme={setTheme} />
        <Hero />
        <CompanySection />
        <Services />
        <OurWork />
        <Teams />
        <Contact />
        <Footer theme={theme} />
      </Suspense>
    </div>
  );
};

export default App;
