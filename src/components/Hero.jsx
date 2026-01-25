'use client';
import Image from "next/image";
import React from "react";
import style from "../Sass/hero.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const Hero = ({ heroImage, title }) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <div className={style.heroSection}>
      <Image
        src={heroImage}
        alt="Hero"
        fill
        className={style.imgHero}
        priority
      />
   
      <div className={style.heroContent}>
        <h1>{title}</h1>
           <Button>
          {isRTL ? (
            <>
              <ArrowLeft size={24} />
              {t("common.start")}
            </>
          ) : (
            <>
              {t("common.start")}
              <ArrowRight size={24} />
            </>
          )}
        </Button>
      </div>
         <div className={style.icon}>
        <FaWhatsapp color="white" size={38} />
      </div>
    </div>
  );
};

export default Hero;
