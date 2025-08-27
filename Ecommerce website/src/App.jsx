import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subcribe/Subcribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  const handleOpenPopup = () => {
    setOpenPopup(!openPopup);
  };
  return (
    <div className="bg-white dark:bg-gray-900 duration-200 dark:text-white">
      <NavBar handleOpenPopup={handleOpenPopup} />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        handleOpenPopup={handleOpenPopup}
      />
    </div>
  );
};

export default App;
