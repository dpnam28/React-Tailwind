import React, { useState, useEffect } from "react";
import assets from "../assets/assets";
import ToggleThemeBtn from "./toggleThemeBtn";
import { US, VN } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const NavBar = ({ theme, setTheme }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [language, setLanguage] = useState("vi");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex justify-between items-center px-4 nav:px-12 lg:px-24 xl:px-40 py-4 sticky top-0
  z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 nav:w-40 cursor-pointer"
        alt=""
      />

      {/* Nav menu */}

      <div
        className={`text-gray-700 dark:text-white nav:text-sm md:text-[16px] ${
          openSideBar
            ? `max-nav:w-60 max-nav:pl-10`
            : "max-nav:w-0 overflow-hidden"
        } max-nav:fixed top-0
      bottom-0 right-0 max-nav:min-h-screen max-nav:h-full max-nav:flex-col max-nav:bg-primary max-nav:text-white
      max-nav:pt-20 flex nav:items-center gap-5 transition-all duration-400`}
      >
        <img
          src={assets.close_icon}
          className="w-5 absolute right-4 top-4 nav:hidden cursor-pointer"
          alt=""
          onClick={() => setOpenSideBar(false)}
        />
        <a
          href="#"
          onClick={() => setOpenSideBar(false)}
          className="nav:hover:border-b"
        >
          {t("nav-bar.home")}
        </a>
        <a
          href="#services"
          onClick={() => setOpenSideBar(false)}
          className="nav:hover:border-b"
        >
          {t("nav-bar.services")}
        </a>
        <a
          href="#our-work"
          onClick={() => setOpenSideBar(false)}
          className="nav:hover:border-b"
        >
          {t("nav-bar.our-work")}
        </a>
        <a
          href="#contact"
          onClick={() => setOpenSideBar(false)}
          className="nav:hover:border-b"
        >
          {t("nav-bar.contact-us")}
        </a>
      </div>

      {/* Button side */}

      <div className="flex items-center gap-2 nav:gap-4 w-max">
        {language === "vi" ? (
          <VN
            className="w-7 md:w-8 cursor-pointer"
            onClick={() => handleChangeLanguage("en")}
          />
        ) : (
          <US
            className="w-7 md:w-8 cursor-pointer"
            onClick={() => handleChangeLanguage("vi")}
          />
        )}

        <ToggleThemeBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          className="w-8 nav:hidden cursor-pointer"
          onClick={() => setOpenSideBar(true)}
          alt=""
        />
        <a
          href="#"
          className="text-nav max-nav:hidden flex items-center gap-2 bg-primary text-white px-6
        py-2 rounded-full cursor-pointer hover:scale-103 transition-all duration-200"
        >
          {t("nav-bar.connect")}
          <img src={assets.arrow_icon} alt="" width={10} />
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
