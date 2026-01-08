import React from "react";
import Image from "next/image";
import style from "@/Sass/home/servicesList.module.scss";
import icon from "../../../../public/assets/icon.svg";

const servicesItems = [
  {
    icon: icon,
    title: "Web Development",
  },
  {
    icon: icon,
    title: "Mobile Apps",
  },
  {
    icon: icon,
    title: "UI/UX Design",
  },
  {
    icon: icon,
    title: "Backend & APIs",
  },
  {
    icon: icon,
    title: "Cloud & DevOps",
  },
  {
    icon: icon,
    title: "Tech Consulting",
  },
];

const ServicesList = () => {
  return (
    <div className={style.list}>
        <div className={style.container}>
        {servicesItems.map((item, index) => (
       <div className={style.items}>
           <div key={index} className={style.item}>
            <div className={style.icon}>
              <Image src={item.icon} alt={item.title} />
            </div>
            <h3 className={style.title}>{item.title}</h3>
          </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
