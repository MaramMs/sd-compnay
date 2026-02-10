"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CustomSwiper from "@/components/customSwiper";
import cover from "../../../../public/assets/cover.png";
import style from "../../../Sass/home/services.module.scss";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useTranslation();
  const {mounted} = useLanguage();
  if (!mounted) return null
  return (
    <div className={style.services}>
      <div className={style.titleWrapper}>
        <motion.h2
          className={style.title}
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {t("services.software")}
        </motion.h2>
      </div>
      <div className={style.content}>
        <h3>{t("services.title")}</h3>
        <p>{t("services.subtitle")}</p>
      </div>
      <div className={style.coverWrapper}>
        <Image src={cover} alt="cover" className={style.cover} />
      </div>
      <div className="mt-[54px]">
        <CustomSwiper />
      </div>
    </div>
  );
};

export default Services;
