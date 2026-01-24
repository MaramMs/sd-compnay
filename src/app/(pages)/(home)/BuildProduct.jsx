"use client";
import React from "react";
import style from "../../../Sass/home/buildProduct.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const BuildProduct = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <div className={style.buildProduct}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.text}>
            <h2>{t("build.title")}</h2>
            <p>{t("build.subTitle")}</p>
          </div>
          <Button>
          
            {isRTL ?  (
              <>
               <ArrowLeft/>
               {t("common.start")} 
               </>
            ) : 
            (
             <>
               {t("common.start")} 
               <ArrowRight />
             </>
            )
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuildProduct;
