'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "../Sass/home/customSwiper.module.scss";
import { ArrowRight, Cloud, Server } from "lucide-react";
import { Button } from "./ui/button";
import { Mousewheel } from "swiper/modules";
const CustomSwiper = () => {
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
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>

            {/* <Cloud /> */}
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
