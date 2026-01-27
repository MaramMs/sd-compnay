"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import about_1 from "../../../../public/assets/about-1.png";
import about_5 from "../../../../public/assets/about-5.png";
import about_6 from "../../../../public/assets/about-6.png";
import trans from "../../../../public/assets/Group.svg";
import innovation from "../../../../public/assets/innovation.png";
import trust from "../../../../public/assets/trust.png";
import style from "../../../Sass/aboutUs/about-content.module.scss";

const AboutContent = () => {
  const { t } = useTranslation();
  return (
    <div className={style.aboutContent}>
      <div className={style.container}>
        <div className={style.boxOne}>
          <h2>{t("about.story")}</h2>
          <div className={style.p}>
            <p>{t("about.story_p1")}</p>
            <p>{t("about.story_p2")}</p> <p>{t("about.story_p3")}</p>
          </div>
        </div>

        <div className={style.boxTwo}>
          <div className={style.title}>
            <h2>{t("about.mission_values")}</h2>
            <p>{t("about.mission_desc")}</p>
          </div>

          <div className={style.transparency}>
            <div className={style.first}>
              <Image src={about_1} alt="about img" />
            </div>

            <div className={style.transparencyContent}>
              <Image src={trans} />
              <h2>{t("about.transparency")}</h2>
              <p>{t("about.transparency_desc")}</p>
              <div className={style.line1}></div>
            </div>
          </div>

          <div className={style.innovation}>
            <div className={style.innovationContent}>
              <Image src={innovation} />
              <h2>{t("about.innovation")}</h2>
              <p>{t("about.innovation_desc")}</p>
              <div className={style.line2}></div>
            </div>
            <div className={style.second}>
              <Image src={about_5} alt="about img" />
            </div>
          </div>

          <div className={style.transparency}>
            <div className={style.three}>
              <Image src={about_6} alt="about img" />
            </div>

            <div className={style.transparencyContent}>
              <Image src={trust} />
              <h2>{t("about.trust")}</h2>
              <p>{t("about.trust_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
