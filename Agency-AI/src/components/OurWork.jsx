import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const OurWork = () => {
  const { t } = useTranslation();
  const workData = [
    {
      title: t("our-work.mobile-app"),
      description: t("our-work.mobile-app-description"),
      image: assets.work_mobile_app,
    },
    {
      title: t("our-work.dashboard-management"),
      description: t("our-work.dashboard-management-description"),
      image: assets.work_dashboard_management,
    },
    {
      title: t("our-work.fitness-app"),
      description: t("our-work.fitness-app-description"),
      image: assets.work_fitness_app,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7
  px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={t("our-work.title")}
        description={t("our-work.description")}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full duration-500">
        {workData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={item.image} alt="" className="w-full rounded-xl" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
