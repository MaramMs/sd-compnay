'use client'
import React from "react";
import style from "../../../Sass/home/about-us.module.scss";
import Image from "next/image";
import imageCollect from'../../../../public/assets/collect.png';
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import imageRtl from '../../../../public/assets/collectRight.png'

const AboutUs = () => {
   const { t } = useTranslation();
    const { mounted, isRTL} = useLanguage();
    if(!mounted) return null;
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>
            {t("about.title")}
          </h2>
          <p className={style.des}>
         {t("about.description")}
          </p>
        </div>
        <div className={style.experiencesContainer}>
          {
            isRTL ? (
              <Image src={imageRtl} alt=""/>
            ) :(

              <Image src={imageCollect} alt=""/>
            )
          }
          <div className={style.experiences}>
            <div className={style.box}>
              <span>7 +</span>
              <p>
                {t("about.years")}
              </p>
            </div>

            <div className={style.box}>
              <span>30 +</span>
              <p>
                {t("about.projectsCompleted")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
