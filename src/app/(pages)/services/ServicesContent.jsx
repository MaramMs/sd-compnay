'use client'
import React from "react";
import style from "../../../Sass/services/servicesContent.module.scss";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const services = [
  { id: 1, slug: "backend-development" },
  { id: 2, slug: "ui-ux-design" },
  { id: 3, slug: "fintech-solutions" },
  { id: 4, slug: "mobile-apps" },
  { id: 5, slug: "cloud-services" },
  { id: 6, slug: "ai-solutions" },
];

const ServicesContent = () => {
  const {t} = useTranslation();
  return (
    <div className={style.servicesContent}>
      <div className={style.container}>
        <div className={style.contentTitle}>
          <h2>{t('services.mainTitle')}</h2>
          <div className={style.des}>
            <p>
              {t('services.description1')}
            </p>
            <p>
            {t('services.description2')}
            </p>
          </div>
        </div>
        <div className={style.servicesItems}>
            {services.map((index,service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={style.serviceLink}
              >
                <ServiceCard index={index.id}/>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
