import React from "react";
import assets from "../assets/assets";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 text-center w-full 
    overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img src={assets.group_profile} className="w-20" alt="" />
        <p className="text-xs font-medium">{t("hero.trust")}</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px]"
      >
        {t("hero.heading1")}
        <span className="bg-gradient-to-r from-[#5044e5] to-[#4ed8ca] bg-clip-text text-transparent">
          {t("hero.heading2")}
        </span>
        {t("hero.heading3")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3"
      >
        {t("hero.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="relative"
      >
        <img src={assets.hero_img} className="w-full max-w-6xl" alt="" />
        <img
          src={assets.bgImage1}
          className="absolute max-sm:-top-30 max-sm:-right-25 lg:-top-90 lg:-right-65 md:-top-70 -top-50 -right-50 -z-1 dark:hidden"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
