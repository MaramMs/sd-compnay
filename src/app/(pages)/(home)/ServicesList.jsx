'use client'
import Image from "next/image";
import style from "@/Sass/home/servicesList.module.scss";
import { servicesItems } from '@/data/servicesItem';
import { useTranslation } from "react-i18next";

const ServicesList = () => {
  const { t }= useTranslation(); 
  return (
    <div className={style.list}>
      <div className={style.container}>
        {servicesItems.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.icon}>
              <Image src={item.icon} alt={t(item.titleKey)} />
            </div>
            <h3 className={style.title}>{t(item.titleKey)}</h3> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;