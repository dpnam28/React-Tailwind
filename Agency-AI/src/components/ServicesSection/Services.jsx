import React from "react";
import assets from "../../assets/assets";
import Title from "../Title";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Services = () => {
  const { t } = useTranslation();
  const serviceData = [
    {
      title: t("services.advertising"),
      description: t("services.advertising-description"),
      icon: assets.ads_icon,
    },
    {
      title: t("services.content-marketing"),
      description: t("services.marketing-description"),
      icon: assets.marketing_icon,
    },
    {
      title: t("services.content-writing"),
      description: t("services.writing-description"),
      icon: assets.content_icon,
    },
    {
      title: t("services.social-media"),
      description: t("services.media-description"),
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute lg:-top-40 md:-top-20 -z-1 dark:hidden"
        alt=""
      />

      <Title
        title={t("services.title")}
        description={t("services.title-description")}
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {serviceData.map((item, index) => (
          <ServiceCard key={index} service={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
