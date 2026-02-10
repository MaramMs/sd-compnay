"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import Search from "./Search";
import feat1 from "../../../../public/assets/feat1.jpg";
import style from "../../../Sass/projects/project-content.module.scss";

const ProjectContent = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <div className={style.projectContent}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>{t("projects.title")}</h2>
          <p>{t("projects.subtitle")}</p>
        </div>

        <Search />

        <div className={style.cards}>
          {[1, 2, 3, 4, 5, 6].map((project) => {
            return (
              <div className={style.card}>
                <div className={style.image}>
                  <Image
                  alt=""
                    src={feat1}
                   
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <div className={style.contentCard}>
                  <h3>E-Commerce Platform</h3>

                  <div className={style.categories}>
                    <span>Retail</span>
                    <span>Web & Mobile</span>
                  </div>

                  <div className={style.des}>
                    <div className={style.rate}>
                      <ArrowUpRight />
                    </div>

                    <p>+40% {t('common.convertRate')}</p>
                  </div>

                  <div className={style.viewProject}>
                    <span> {t("common.viewProject")}</span>
                    {isRTL ? (
                      <ArrowLeft size={24} className="text-[#FCFCFC]!" />
                    ) : (
                      <ArrowRight size={24} className="text-[#FCFCFC]!" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button className={style.button}>
          Load More
          <ArrowRight size={24} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectContent;
