import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2978e921-acc5-4f8f-bb8f-e945afe2b50e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact"
      className="flex flex-col items-center gap-7 ps-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title={t("contact.title")}
        description={t("contact.description")}
      />

      {/* Input fields */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={handleOnSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name */}
        <div className="">
          <p className="mb-2 text-sm font-medium">{t("contact.your-name")}</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder={t("contact.enter-name")}
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="">
          <p className="mb-2 text-sm font-medium">{t("contact.email")}</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder={t("contact.enter-email")}
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">{t("contact.message")}</p>
          <textarea
            rows={8}
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          ></textarea>
        </div>

        <button
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full
        hover:scale-103 transition-all cursor-pointer"
        >
          {t("contact.submit")}{" "}
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
