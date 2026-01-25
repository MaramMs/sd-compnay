'use client';
import React from "react";
import style from "../../../../Sass/services/offer.module.scss";
import tool from "../../../../../public/assets/concept.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Offer = () => {
  const { t } = useTranslation();
  return (
    <div className={style.offer}>
      <div className={style.overlay}></div>
      <div className={style.container}>
        <h2>{t('services.mainTitleDetails')}</h2>
        <div className={style.cards}>
          <div className={style.card}>
            <h3>Custom API Development</h3>
            <p>
              Designing and implementing RESTful and GraphQL APIs for seamless
              integration across your web, mobile, and third‑party systems,
              ensuring secure data exchange, high performance, and easy
              scalability as your product grows.
            </p>
          </div>
          <div className={style.card}>
            <h3>Custom API Development</h3>
            <p>
              Designing and implementing RESTful and GraphQL APIs for seamless
              integration across your web, mobile, and third‑party systems,
              ensuring secure data exchange, high performance, and easy
              scalability as your product grows.
            </p>
          </div>
          <div className={style.card}>
            <h3>Custom API Development</h3>
            <p>
              Designing and implementing RESTful and GraphQL APIs for seamless
              integration across your web, mobile, and third‑party systems,
              ensuring secure data exchange, high performance, and easy
              scalability as your product grows.
            </p>
          </div>
          <div className={style.card}>
            <h3>Custom API Development</h3>
            <p>
              Designing and implementing RESTful and GraphQL APIs for seamless
              integration across your web, mobile, and third‑party systems,
              ensuring secure data exchange, high performance, and easy
              scalability as your product grows.
            </p>
          </div>
        </div>

        <div className={style.tools}>
          <div className={style.title}>
            <Image src={tool} />
            <h3>{t('services.tools')}</h3>
          </div>
          <div className={style.toolsItem}>
            <div className={style.item}>
              <h4>Languages</h4>
              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>

            <div className={style.item}>
              <h4>Languages</h4>
              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>

            <div className={style.item}>
              <h4>Languages</h4>
              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
