'use client';
import React from "react";
import style from "../../../Sass/home/services.module.scss";
import CustomSwiper from "@/components/customSwiper";
import Image from "next/image";
import cover from "../../../../public/assets/cover.png";

const Services = () => {
  return (
    <div className={style.services}>
      <h2 className={style.title}>SOFTWARE DEVELOPMENT</h2>
      <div className={style.content}>
        <h3>Explore Our Services</h3>
        <p>Comprehensive tech solutions for all your digital needs</p>
      </div>
      <div className="mt-[54px]">
        <CustomSwiper />
      </div>
      <Image src={cover} className={style.cover}/>
    </div>
  );
};

export default Services;
