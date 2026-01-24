'use client'
import React from "react";
import style from "../../../Sass/home/about-us.module.scss";
import Image from "next/image";
import about_1 from "../../../../public/assets/about-1.png";
import about_2 from "../../../../public/assets/about-2.png";
import about_3 from "../../../../public/assets/about-3.png";
import about_4 from "../../../../public/assets/about-4.png";
import logo from "../../../../public/assets/LOGO.svg";
import imageCollect from'../../../../public/assets/collect.png';
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import imageRtl from '../../../../public/assets/collectRight.png'

const AboutUs = () => {
   const { t } = useTranslation();
    const { mounted, isRTL, currentLanguage } = useLanguage();
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>
            {mounted ? t("about.title") : ""}
          </h2>
          <p className={style.des}>
         {   mounted ? t("about.description") : ""}
          </p>
        </div>
        <div className={style.experiencesContainer}>
          {
            isRTL ? (
              <Image src={imageRtl} />
            ) :(

              <Image src={imageCollect}/>
            )
          }
          <div className={style.experiences}>
            <div className={style.box}>
              <span>8 +</span>
              <p>
                {t("about.years")}
              </p>
            </div>

            <div className={style.box}>
              <span>50 +</span>
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
