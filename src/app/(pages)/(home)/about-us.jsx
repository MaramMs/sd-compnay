import React from "react";
import style from "../../../Sass/home/about-us.module.scss";
import Image from "next/image";
import about_1 from "../../../../public/assets/about-1.png";
import about_2 from "../../../../public/assets/about-2.png";
import about_3 from "../../../../public/assets/about-3.png";
import about_4 from "../../../../public/assets/about-4.png";
import logo from "../../../../public/assets/LOGO.svg";
import imageCollect from'../../../../public/assets/collect.png';

const AboutUs = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>About Us</h2>
          <p className={style.des}>
            SD is your trusted software development partner. We deliver
            innovative tech solutions that help businesses grow and scale in the
            digital age with efficiency and professionalism.
          </p>
        </div>
        <div className={style.experiencesContainer}>
          <Image src={imageCollect}/>
          {/* <div className={style.aboutPhotos}>
            <div className={`${style.imgWrap} ${style.first}`}>
              <Image src={about_1} alt="about img" />
            </div>

            <div className={style.imgWrap}>
              <Image src={about_2} alt="about img" />
            </div>

            <div className={style.imgWrap}>
              <Image src={about_3} alt="about img" />
            </div>
            <div className={`${style.imgWrap} ${style.last}`}>
              <Image src={about_4} alt="about img" />#{" "}
              <div className={style.logo}>
                <Image src={logo} alt="logo" className={style.logoImage} />
              </div>
            </div>
          </div> */}
          <div className={style.experiences}>
            <div className={style.box}>
              <span>8 +</span>
              <p>Years Experience</p>
            </div>

            <div className={style.box}>
              <span>50 +</span>
              <p>Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
