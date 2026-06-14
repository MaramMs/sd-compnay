"use client";
import { ArrowLeft, ArrowRight,Server } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import style from "../Sass/home/customSwiper.module.scss";

const ServiceCard = ({ index ,item}) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  console.log(item , 'item')
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
      <h3>{t(item?.titleKey)}</h3>
      {item?.desKey && <p>{t(item?.desKey)}</p>}

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
