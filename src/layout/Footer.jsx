'use client'
import React from "react";
import style from "../Sass/footer.module.scss";
import Image from "next/image";
import logo from "../../public/assets/LOGO.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentInfo}>
            <Image src={logo} width={78} height={59} />
            <p>
             {t("footer.description")}
            </p>
            <div className={style.social}>
              <div className={style.icon}>
                <FaFacebook  size={24} />
              </div>
              <div className={style.icon}>
                <FaInstagram size={24} />
              </div>
              <div className={style.icon}>
                <FaXTwitter size={24} />
              </div>
              <div className={style.icon}>
                <FaLinkedin size={24} />
              </div>
            </div>
          </div>

          <div className={style.company}>
            <h2>
              {t("footer.company.title")}
            </h2>
            <ul>
              <li>{t('footer.company.about')}</li>
              <li>{t('footer.company.services')}</li>
              <li>{t('footer.company.projects')}</li>
              <li>{t('footer.company.Consultation')}</li>
            </ul>
          </div>
            <div className={style.services}>
            <h2>{t('footer.services.title')}</h2>
            <ul>
              <li>{t('footer.services.web')}</li>
              <li>{t('footer.services.mobile')}</li>
              <li>{t('footer.services.design')}</li>
              <li>{t('footer.services.tech')}</li>
            </ul>
          </div>
            <div className={style.resources}>
           <div className={style.blog}>
             <h2>{t('footer.resource.title')}</h2>
           <span>{t('footer.resource.blog')}</span>
           </div>
           <div className={style.contact}>
            <div className={style.contactItem}>
              <span>info@sdcompany.com</span>

            </div>
             <div className={style.contactItem}>
              <span>i+1 (555) 123-4567</span>

            </div>

           </div>
          </div>
        </div>
        <div className={style.copy}>
          <p>© 2025 SD. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
