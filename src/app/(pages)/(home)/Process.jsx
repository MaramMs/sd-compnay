"use client";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import {processItems } from '@/data/processItem'
import style from "../../../Sass/home/process.module.scss";
const Process = () => {
  const { t } = useTranslation();
  const { mounted } = useLanguage();
  if (!mounted) return null;
  return (
    <div className={style.process}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentTitle}>
            <h3>{t("process.title")}</h3>
            <p>{t("process.subtitle")}</p>
          </div>
          <div className="grid! grid-cols-2! md:grid-cols-4! gap-4! md:gap-6">
            {processItems.map((item, index) => (
              <div key={index} className={style.processItem}>
                <div className={style.processNumber}>
                  <div className={style.icon}>{item.icon}</div>
                  <h4>{item.number}</h4>
                </div>
                <div className={style.processContent}>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
