import Image from "next/image";
import React from "react";
import style from "../Sass/hero.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = ({ heroImage, title }) => {
  return (
    <div className={style.heroSection}>
      <Image
        src={heroImage}
        alt="Hero"
        fill
        className={style.imgHero}
        priority
      />
   
      <div className={style.heroContent}>
        <h1>{title}</h1>
        <Button>
          Start Your Project
          <ArrowRight />
        </Button>
      </div>
         <div className={style.icon}>
        <FaWhatsapp color="white" size={38} />
      </div>
    </div>
  );
};

export default Hero;
