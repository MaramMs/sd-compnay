import { styleEffect } from "motion";
import React from "react";
import style from "../../../Sass/aboutUs/about-content.module.scss";
import about_1 from "../../../../public/assets/about-1.png";
import about_5 from "../../../../public/assets/about-5.png";
import about_6 from "../../../../public/assets/about-6.png";
import Image from "next/image";
import trans from '../../../../public/assets/Group.svg'
import innovation from '../../../../public/assets/innovation.png'
import trust from '../../../../public/assets/trust.png'

const AboutContent = () => {
  return (
    <div className={style.aboutContent}>
      <div className={style.container}>
        <div className={style.boxOne}>
          <h2>Our Story</h2>
          <div className={style.p}>
            <p>
              At Software Development, we launched in 2020 to bridge the gap in
              custom software solutions for businesses across the Middle East.
            </p>
            <p>
              From a passionate team of developers and designers, we've
              empowered over 500+ clients with scalable fintech apps,
              dashboards, and responsive platforms.
            </p>{" "}
            <p>
              Our vision: Empower every business to thrive through innovative,
              user-centric technology.
            </p>
          </div>
        </div>

        <div className={style.boxTwo}>
          <div className={style.title}>
            <h2>Mission & Values</h2>
            <p>
              Our mission is to craft secure, intelligent software that
              transforms complex challenges into seamless digital experiences.
              We uphold three core values
            </p>
          </div>

          <div className={style.transparency}>
            <div className={style.first}>
              <Image src={about_1} alt="about img" />
            </div>

            <div className={style.transparencyContent}>
              <Image  src={trans}/>
              <h2>Transparency</h2>
              <p>
                Every project phase is visible through client dashboards with
                live progress updates, analytics, and milestone trackers. We
                share raw data, timelines, and performance metrics upfront,
                eliminating surprises and fostering informed decisions—just like
                open-source code reviews in our development workflows.
              </p>
            </div>
          </div>
          <div className={style.line1}></div>

          <div className={style.innovation}>
               <div className={style.innovationContent}>
              <Image  src={innovation}/>
              <h2>Innovation</h2>
              <p>
                Every project phase is visible through client dashboards with
                live progress updates, analytics, and milestone trackers. We
                share raw data, timelines, and performance metrics upfront,
                eliminating surprises and fostering informed decisions—just like
                open-source code reviews in our development workflows.
              </p>
            </div>
            <div className={style.second}>
              <Image src={about_5} alt="about img" />
            </div>

         
          </div>
          <div className={style.line2}></div>


           <div className={style.transparency}>
            <div className={style.three}>
              <Image src={about_6} alt="about img" />
            </div>

            <div className={style.transparencyContent}>
              <Image  src={trust}/>
              <h2>Trust</h2>
              <p>
                Every project phase is visible through client dashboards with
                live progress updates, analytics, and milestone trackers. We
                share raw data, timelines, and performance metrics upfront,
                eliminating surprises and fostering informed decisions—just like
                open-source code reviews in our development workflows.
              </p>
            </div>
          </div>
        </div>

          
      </div>
    </div>
  );
};

export default AboutContent;
