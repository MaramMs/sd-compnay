import Image from "next/image";
import React from "react";
import style from "../../../Sass/consultation/hero.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImage from '../../../../public/assets/heroCons.jpg'

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
  
      <div className={style.heroContent}>
       <div className={style.container}>
         <div className={style.title}>
        <h2>Expert Software Consultations</h2>
      <p>
        Get tailored advice from 10+ years of fintech and UI/UX experts. Identify your tech challenges and book a free session today.
      </p>
      </div>
      <Button>
        Book Now 
        <ArrowRight />
        </Button>

       </div>
      </div>


          <div className={style.icon}>
        <FaWhatsapp color="white" size={38} />
      </div>
    </div>
  );
};

export default Hero;
