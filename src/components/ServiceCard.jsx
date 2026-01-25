"use client";
import React from "react";
import { ArrowLeft, ArrowRight, Cloud, Server } from "lucide-react";
import { Button } from "./ui/button";
import style from "../Sass/home/customSwiper.module.scss";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const ServiceCard = ({ index }) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <div className={style.slideContent}>
      <div className={style.serviceTitle}>
        <div className={style.iconBox}>
          <Server className={style.icon} size={50} />
        </div>
        <span>
          {t(`services.service`)} {"0" + index}
        </span>
      </div>

      <div className={style.serviceDesc}>
        <h3>Backend & APIs</h3>
        <p>cRobust, secure backend architecture with reliable APIs</p>

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
    </div>
  );
};

export default ServiceCard;
