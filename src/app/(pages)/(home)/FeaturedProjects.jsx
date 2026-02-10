"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import feat1 from "../../../../public/assets/feat1.jpg";
import feat2 from "../../../../public/assets/feat2.jpg";
import feat3 from "../../../../public/assets/feat3.jpg";
import style from "../../../Sass/home/featured-projects.module.scss";
const FeaturedProjects = () => {
  const { t } = useTranslation();
  const { isRTL, mounted } = useLanguage();

  if (!mounted) return null;
  return (
    <div className={style.featuredProjects}>
      <div className={style.container}>
        <div className={style.contentTitle}>
          <h3>{t("projects.title")}</h3>
          <p>{t("projects.subtitle")}</p>
        </div>
        <div className={style.gridDesktop}>
          <div className={style.grid}>
            <div className={style.gridOne}>
              <div className={style.card}>
                <div className={style.image}>
                  <Image
                    alt=""
                    src={feat1}
                    width={568}
                    height={197}
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <h3>E-Commerce Platform</h3>

                <div className={style.categories}>
                  <span>Retail</span>
                  <span>Web & Mobile</span>
                </div>

                <div className={style.des}>
                  <div className={style.rate}>
                    <ArrowUpRight />
                  </div>

                  <p>+40% Conversion Rate</p>
                </div>

                <div className={style.viewProject}>
                  <span>{t("common.viewProject")}</span>
                  {isRTL ? (
                    <ArrowLeft size={24} className="text-[#FCFCFC]!" />
                  ) : (
                    <ArrowRight size={24} className="text-[#FCFCFC]!" />
                  )}{" "}
                </div>
              </div>
            </div>
            <div className={style.gridTwo}>
              <div className={style.cardTwo}>
                <div className={style.image}>
                  <Image
                    alt=""
                    src={feat2}
                    width={272}
                    height={222}
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <div className={style.cardContent}>
                  <h3>E-Commerce Platform</h3>

                  <div className={style.categories}>
                    <span>Retail</span>
                    <span>Web & Mobile</span>
                  </div>

                  <div className={style.des}>
                    <div className={style.rate}>
                      <ArrowUpRight />
                    </div>

                    <p>+40% Conversion Rate</p>
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
            </div>
            <div className={style.gridThree}>
              <div className={style.cardTwo}>
                <div className={style.image}>
                  <Image
                    alt=""
                    src={feat3}
                    width={272}
                    height={222}
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <div className={style.cardContent}>
                  <h3>E-Commerce Platform</h3>

                  <div className={style.categories}>
                    <span>Retail</span>
                    <span>Web & Mobile</span>
                  </div>

                  <div className={style.des}>
                    <div className={style.rate}>
                      <ArrowUpRight />
                    </div>

                    <p>+40% Conversion Rate</p>
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
            </div>
          </div>
        </div>

        <div className={style.gridMobile}>
          <Swiper
            modules={[Mousewheel]}
            spaceBetween={16}
            slidesPerView={1.2}
            mousewheel={{
              forceToAxis: true,
            }}
          >
            <SwiperSlide>
              <div className={style.card}>
                <div className={style.image}>
                  <Image
                  alt=""
                    src={feat1}
                    width={568}
                    height={197}
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <h3>E-Commerce Platform</h3>

                <div className={style.categories}>
                  <span>Retail</span>
                  <span>Web & Mobile</span>
                </div>

                <div className={style.des}>
                  <div className={style.rate}>
                    <ArrowUpRight />
                  </div>

                  <p>+40% Conversion Rate</p>
                </div>

                <div className={style.viewProject}>
                  <span> {t("projects.viewProject")}</span>
                  {isRTL ? (
                    <ArrowLeft size={24} className="text-[#FCFCFC]!" />
                  ) : (
                    <ArrowRight size={24} className="text-[#FCFCFC]!" />
                  )}{" "}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <div className={style.image}>
                  <Image
                    alt=""
                    src={feat1}
                    width={568}
                    height={197}
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <h3>E-Commerce Platform</h3>

                <div className={style.categories}>
                  <span>Retail</span>
                  <span>Web & Mobile</span>
                </div>

                <div className={style.des}>
                  <div className={style.rate}>
                    <ArrowUpRight />
                  </div>

                  <p>+40% Conversion Rate</p>
                </div>

                <div className={style.viewProject}>
                  <span> {t("projects.viewProject")}</span>
                  {isRTL ? (
                    <ArrowLeft size={24} className="text-[#FCFCFC]!" />
                  ) : (
                    <ArrowRight size={24} className="text-[#FCFCFC]!" />
                  )}{" "}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <div className={style.image}>
                  <Image
                    alt=""
                    src={feat1}
                    width={568}
                    height={197}
                    className="rounded-2xl h-49.25 object-cover "
                  />
                </div>
                <h3>E-Commerce Platform</h3>

                <div className={style.categories}>
                  <span>Retail</span>
                  <span>Web & Mobile</span>
                </div>

                <div className={style.des}>
                  <div className={style.rate}>
                    <ArrowUpRight />
                  </div>

                  <p>+40% Conversion Rate</p>
                </div>

                <div className={style.viewProject}>
                  <span> {t("projects.viewProject")}</span>
                  {isRTL ? (
                    <ArrowLeft size={24} className="text-[#FCFCFC]!" />
                  ) : (
                    <ArrowRight size={24} className="text-[#FCFCFC]!" />
                  )}{" "}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
