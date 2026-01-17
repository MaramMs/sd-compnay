"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import style from "../../../Sass/consultation/custom-siwper.module.scss";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomSwiper() {
  const paginationRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
      slidesPerView={1}
      // loop
      // autoplay={{ delay: 5000 }}
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      pagination={{
        el: paginationRef.current,
        clickable: true,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.pagination.el = paginationRef.current;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      className={style.testimonialSwiper}
    >
      {[1,2,3,4].map((_, i) => (
        <SwiperSlide key={i} className={style.slide}>
          <div className={style.card}>
            <div className={style.rating}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} />
              ))}
            </div>

            <p className={style.quote}>
              "Fast, actionable solutions that saved us months of development
              time and <br /> thousands in costs."
            </p>

            <div className={style.footer}>
              <h4>Ahmed Ali</h4>
              <span>SaaS Company</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className={style.controls}>
        <button ref={prevRef} className={style.arrow}>
          <ChevronLeft size={20} />
        </button>
        <div ref={paginationRef} className={style.pagination} />
        <button ref={nextRef} className={style.arrow}>
          <ChevronRight size={20} />
        </button>
      </div>
    </Swiper>
  );
}
