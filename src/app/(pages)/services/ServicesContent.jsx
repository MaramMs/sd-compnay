import React from "react";
import style from "../../../Sass/services/servicesContent.module.scss";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
const services = [
  { id: 1, slug: "backend-development" },
  { id: 2, slug: "ui-ux-design" },
  { id: 3, slug: "fintech-solutions" },
  { id: 4, slug: "mobile-apps" },
  { id: 5, slug: "cloud-services" },
  { id: 6, slug: "ai-solutions" },
];

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
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={style.serviceLink}
              >
                <ServiceCard />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
