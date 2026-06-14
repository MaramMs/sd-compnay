"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "../Sass/home/customSwiper.module.scss";
import { Mousewheel } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "./ServiceCard";
import { servicesItems } from "@/data/servicesItem";
const CustomSwiper = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <Swiper
      modules={[Mousewheel]}
      spaceBetween={50}
      slidesPerView={3.5}
      mousewheel={{
        forceToAxis: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3.5,
        },
      }}
    >
      {servicesItems.map((item,index) => {
        console.log(item , 'item from silder')
        return (
          <SwiperSlide key={index}>
            <ServiceCard index={index} item={item}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CustomSwiper;
