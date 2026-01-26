'use client'
import React from "react";
import style from "../../../Sass/consultation/scope.module.scss";
import { Settings } from "lucide-react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Scope = () => {
  const {t} = useTranslation()
  return (
    <div className={style.scope}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>{t('consultation.title')}</h2>
          <p>{t('consultation.subTitle')}</p>
        </div>

        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.icon}>
              <Settings color="#FCFCFC" size={32} />
            </div>
         <div className={style.content}>
             <h2>Tech Stack Audits</h2>
            <p>
              Comprehensive analysis and optimization of your technology
              infrastructure
            </p>
            <ul>
              <li>Performance audits</li>
              <li>Performance audits</li>
              <li>Performance audits</li>
            </ul>
         </div>
          </div>

           <div className={style.card}>
            <div className={style.icon}>
              <Settings color="#FCFCFC" size={32} />
            </div>
            <h2>Tech Stack Audits</h2>
            <p>
              Comprehensive analysis and optimization of your technology
              infrastructure
            </p>
            <ul>
              <li>Performance audits</li>
              <li>Performance audits</li>
              <li>Performance audits</li>
            </ul>
          </div>
           <div className={style.card}>
            <div className={style.icon}>
              <Settings color="#FCFCFC" size={32} />
            </div>
            <h2>Tech Stack Audits</h2>
            <p>
              Comprehensive analysis and optimization of your technology
              infrastructure
            </p>
            <ul>
              <li>Performance audits</li>
              <li>Performance audits</li>
              <li>Performance audits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;

