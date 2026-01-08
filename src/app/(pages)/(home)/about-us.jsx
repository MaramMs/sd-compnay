import React from "react";
import style from "../../../Sass/home/about-us.module.scss";

const AboutUs = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
          <div className={style.content}>
            <h2 className={style.title}>About Us</h2>
            <p className={style.des}>
              SD is your trusted software development partner. We deliver
              innovative tech solutions that help businesses grow and scale in
              the digital age with efficiency and professionalism.
            </p>
          </div>

          <div className={style.experiences}>
            <div className={style.experience}>
              <span>8 +</span>
              <p>Years Experience</p>
            </div>

            <div className={style.experience}>
              <span>50 +</span>
              <p>Projects Completed</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;


