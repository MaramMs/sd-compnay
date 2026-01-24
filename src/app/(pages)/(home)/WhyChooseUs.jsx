'use client';
import React from "react";
import style from "../../../Sass/home/whyChooseUs.module.scss";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const {t} =useTranslation();
  return (
    <div className={style.whyChooseUs}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentTitle}>
            <h3>{t("chooseUs.title")}</h3>
            <p>
              {t("chooseUs.description")}
            </p>
          </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>

  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>

  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>

  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>
</div>



      
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
