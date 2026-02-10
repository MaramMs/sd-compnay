import Image from "next/image";
import style from "@/Sass/home/servicesList.module.scss";
import {servicesItems} from '@/data/servicesItem'

const ServicesList = () => {
  return (
    <div className={style.list}>
      <div className={style.container}>
        {servicesItems.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.icon}>
              <Image src={item.icon} alt={item.title} />
            </div>
            <h3 className={style.title}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
