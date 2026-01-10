'use client';
import CustomSwiper from "@/components/customSwiper";
import Image from "next/image";
import cover from "../../../../public/assets/cover.png";
import { motion } from "framer-motion";
import style from "../../../Sass/home/services.module.scss";

const Services = () => {
  return (
    <div className={style.services}>
        <div className={style.titleWrapper}>
        <motion.h2
          className={style.title}
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          SOFTWARE DEVELOPMENT
        </motion.h2>
      </div>
      <div className={style.content}>
        <h3>Explore Our Services</h3>
        <p>Comprehensive tech solutions for all your digital needs</p>
      </div>
        <div className={style.coverWrapper}>
    <Image src={cover} alt="cover" className={style.cover} />
  </div>

      <div className="mt-[54px]">
        <CustomSwiper />
      </div>
    </div>
  );
};

export default Services;
