import React from "react";
import assets from "../assets/assets";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Footer = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40"
    >
      {/* top footer */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-between lg:items-center max-lg:flex-col gap-10"
      >
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt=""
            className="w-32 sm:w-44"
          />
          <p className="max-w-md">{t("footer.description")}</p>

          <ul className="flex gap-8">
            <li>
              <a href="#" className="hover:text-primary">
                {t("footer.home")}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                {t("footer.services")}
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-primary">
                {t("footer.our-work")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                {t("footer.contact-us")}
              </a>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className=""> {t("footer.subscribe")}</h3>
          <p className="text-sm mt-2 mb-6">
            {t("footer.subscribe-description")}
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded-[5px] dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />

            <button className="bg-primary text-white rounded px-6 w-40">
              {t("footer.subscribe-button")}
            </button>
          </div>
        </motion.div>
      </motion.div>

      <hr className="my-6 border-gray-300 dark:border-gray-600" />
      {/* bottom footer */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p> {t("footer.copyright")}</p>
        <div className="flex items-center justify-between gap-4">
          <a href="https://github.com/dpnam28" target="_blank">
            <FaGithub className="text-[21px] text-[#94a3b8]" />
          </a>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
