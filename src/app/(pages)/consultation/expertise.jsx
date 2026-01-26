'use client'
import React from "react";
import style from "../../../Sass/consultation/expertise.module.scss";
import CustomSwiper from "./CustomSwiper";
import { useTranslation } from "react-i18next";

const Expertise = () => {
  const {t} = useTranslation()
  return (
    <div className={style.expertise}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>{t('consultation.expertiseTitle')}</h2>
          <p>
          {t('consultation.expertiseDes')}
          </p>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <span>500+</span>
            <h5>Years Experience</h5>
            <div className={style.line}></div>
          </div>
          <div className={style.card}>
            <span>500+</span>
            <h5>Years Experience</h5>
            <div className={style.line}></div>
          </div>
          <div className={style.card}>
            <span>500+</span>
            <h5>Years Experience</h5>
            <div className={style.line}></div>
          </div>
        </div>

              <CustomSwiper />

      </div>
    </div>
  );
};

export default Expertise;
