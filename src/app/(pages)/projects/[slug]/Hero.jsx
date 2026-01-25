import Image from "next/image";
import React from "react";
import style from "../../../../Sass/projects/hero.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from '../../../../../public/assets/projectDetails.jpg'

const Hero = () => {
  return (
    <div className={style.heroSection}>
      <Image
        src={heroImage}
        alt="Hero"
        fill
        className={style.imgHero}
        priority
      />
      <div className={style.icon}>
        <FaWhatsapp color="white" size={38} />
      </div>
     <div className={style.container}>
       <div className={style.heroContent}>
        <div className={style.categories}>
        <div className={style.category}>E-Commerce / Retail</div>
        <div className={style.year}>2026</div>

        </div>
      <div className={style.title}>
        <h2>StyleHub Global</h2>
      <p>
        Transforming luxury fashion retail with a seamless, lightning-fast shopping experience that converts browsers into buyers.
      </p>
      </div>
      <Button>
        View Live Project
        <ArrowRight />
        </Button>
      </div>

     </div>

    </div>
  );
};

export default Hero;
