import React, { useEffect } from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { useState } from "react";

const Teams = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7
  px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title title={t("team.title")} description={t("team.description")} />

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl
          bordeer border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100
          dark:shadow-white/5 hover:scale-103 transition-all duration-400"
          >
            <img src={item.image} alt="" className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="text-sm font-bold">{item.name}</h3>
              <p className="text-xs opacity-60">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
