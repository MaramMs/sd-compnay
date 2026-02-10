import Image from "next/image";
import style from "../../../Sass/aboutUs/our-team.module.scss";
import {teams} from '@/data/teamItems'

export const OurTeam = () => {
  return (
    <div className={style.ourTeam}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentTitle}>
            <h3>Meet Our Team</h3>
            <p>
              Our leadership team combines 10+ years of software engineering,
              UI/UX design, and fintech innovation for Middle East businesses.
            </p>
          </div>
          <div className="grid! grid-cols-1! md:grid-cols-4! gap-6!">
            {teams.map((item, index) => (
              <div className={style.card} key={index}>
                <div className={style.teamItem}>
                  <h2>{item.name}</h2>
                  <h3>{item.position}</h3>
                  <p>{item.des}</p>
                </div>

                <div className={style.cover}>
                  <Image src={item.image} width={272} height={374} alt=''/>
                  <div className={style.info}>
                    <h4>{item.name}</h4>
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
