'use client'
import React from "react";
import style from "../../../../Sass/projects/rate.module.scss";
import Image from "next/image";
import num from "../../../../../public/num.svg";
import { useTranslation } from "react-i18next";
const Rate = () => {
  const {t} = useTranslation()
  return (
    <div className={style.rate}>
      <div className={style.container}>
        <div className={style.tools}>
          <div className={style.title}>
            <div className={style.titleImage}>
              <Image src={num} />
              <h3>{t('projects.rateTitle')}</h3>
            </div>

            <p>
            {t('projects.rateDes')}
            </p>
          </div>
          <div className={style.toolsItem}>
            <div className={style.item}>
              <h4>150%</h4>
              <span>Languages</span>

              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>

            <div className={style.item}>
              <h4>60%</h4>
              <span>Languages</span>

              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>

            <div className={style.item}>
              <h4>200%</h4>
              <span>Languages</span>

              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
