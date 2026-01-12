import React from "react";
import style from "../../../Sass/services/servicesContent.module.scss";
import ServiceCard from "@/components/ServiceCard";

const ServicesContent = () => {
  return (
    <div className={style.servicesContent}>
      <div className={style.container}>
        <div className={style.contentTitle}>
          <h2>Our Expertise</h2>
          <div className={style.des}>
            <p>
              At Software Development, we deliver cutting-edge services in
              custom software, UI/UX design, and fintech solutions tailored for
              Middle East businesses.
            </p>
            <p>
              From responsive web apps to AI-powered dashboards, we've equipped
              500+ clients with scalable platforms that drive growth and
              efficiency.
            </p>
          </div>
        </div>

        <div className={style.servicesItems}>
<ServiceCard />
<ServiceCard />
<ServiceCard />
<ServiceCard />
<ServiceCard />
<ServiceCard />

        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
