"use client";
import React, { useRef } from "react";
import style from "../../../../Sass/projects/project-review.module.scss";
import { BsFillHexagonFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import image2 from "../../../../../public/assets/projectDe.jpg";
import image3 from "../../../../../public/assets/feat1.jpg";
import image4 from "../../../../../public/assets/feat2.jpg";
const images = [image2, image3, image4];
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectReview = () => {
  const paginationRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={style.projectReview}>
      <div className={style.container}>
        <div className={style.reviewContent}>
          <div className={style.title}>
            <h2>Project Review</h2>
            <p>Seamless luxury shopping on any device.</p>
          </div>

          <div className={style.reviewText}>
            <div className={style.reviewItem}>
              <BsFillHexagonFill color="#251462" size={16} />
              <div className={style.text}>
                <h3>Responsive Design</h3>
                <p>
                  Multi-currency support with localized experiences for 50+
                  countries
                </p>
              </div>
            </div>

            <div className={style.reviewItem}>
              <BsFillHexagonFill color="#251462" size={16} />
              <div className={style.text}>
                <h3>Responsive Design</h3>
                <p>
                  Multi-currency support with localized experiences for 50+
                  countries
                </p>
              </div>
            </div>
            <div className={style.reviewItem}>
              <BsFillHexagonFill color="#251462" size={16} />
              <div className={style.text}>
                <h3>Responsive Design</h3>
                <p>
                  Multi-currency support with localized experiences for 50+
                  countries
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.reviewImage}>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination]}
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
            <SwiperSlide>
              <div className={style.card}>
                <Image
                  src={image3}
                  // alt={`project-${i}`}
                  fill
                  className={style.image}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <Image
                  src={image2}
                  // alt={`project-${i}`}
                  fill
                  className={style.image}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <Image
                  src={image4}
                  // alt={`project-${i}`}
                  fill
                  className={style.image}
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={style.controls}>
            <button ref={prevRef} className={style.arrow}>
              <ChevronLeft size={20} />
            </button>

            <div ref={paginationRef} className={style.pagination} />

            <button ref={nextRef} className={style.arrow}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectReview;
