'use client';
import React from "react";
import style from "../../../../Sass/projects/technologies-used.module.scss";
import { useTranslation } from "react-i18next";

const TechnologiesUsed = () => {
  const {t} = useTranslation()
  return (
    <div className={style.technologiesUsed}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>{t('projects.techUsed')}</h2>
          <p>
    {t('projects.techUsedDes')}
          </p>
        </div>

        <div className={style.techCards}>
          <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>

           <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>

           <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>
           <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
