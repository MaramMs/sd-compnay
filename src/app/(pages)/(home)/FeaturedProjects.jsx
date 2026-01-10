import React from "react";
import style from "../../../Sass/home/featured-projects.module.scss";
import Image from "next/image";
import feat1 from "../../../../public/assets/feat1.jpg";
import feat2 from "../../../../public/assets/feat2.jpg";
import feat3 from "../../../../public/assets/feat3.jpg";
import { ArrowRight, ArrowUpRight } from "lucide-react";
const FeaturedProjects = () => {
  return (
    <div className={style.featuredProjects}>
      <div className={style.container}>
        <div className={style.contentTitle}>
          <h3>Featured Projects</h3>
          <p>
            Real results from clients who achieved impressive digital success
          </p>
        </div>

        <div class={style.grid}>
          <div class={style.gridOne}>
            <div className={style.card}>
              <div className={style.image}>
                <Image
                  src={feat1}
                  width={568}
                  height={197}
                  className="rounded-2xl h-49.25 object-cover "
                />
              </div>
              <h3>E-Commerce Platform</h3>

              <div className={style.categories}>
                <span>Retail</span>
                <span>Web & Mobile</span>
              </div>

              <div className={style.des}>
                <div className={style.rate}>
                  <ArrowUpRight />
                </div>

                <p>+40% Conversion Rate</p>
              </div>

              <div className={style.viewProject}>
                <span>View Project</span>
                <ArrowRight size={24} className="text-[#FCFCFC]!" />
              </div>
            </div>
          </div>
          <div class={style.gridTwo}>
            <div className={style.cardTwo}>
              <div className={style.image}>
                <Image
                  src={feat2}
                  width={272}
                  height={222}
                  className="rounded-2xl h-49.25 object-cover "
                />
              </div>
              <div className={style.cardContent}>
                <h3>E-Commerce Platform</h3>

                <div className={style.categories}>
                  <span>Retail</span>
                  <span>Web & Mobile</span>
                </div>

                <div className={style.des}>
                  <div className={style.rate}>
                    <ArrowUpRight />
                  </div>

                  <p>+40% Conversion Rate</p>
                </div>

                <div className={style.viewProject}>
                  <span>View Project</span>
                  <ArrowRight size={24} className="text-[#FCFCFC]!" />
                </div>
              </div>
            </div>
          </div>
          <div class={style.gridThree}>
            <div className={style.cardTwo}>
              <div className={style.image}>
                <Image
                  src={feat3}
                  width={272}
                  height={222}
                  className="rounded-2xl h-49.25 object-cover "
                />
              </div>
              <div className={style.cardContent}>
                <h3>E-Commerce Platform</h3>

                <div className={style.categories}>
                  <span>Retail</span>
                  <span>Web & Mobile</span>
                </div>

                <div className={style.des}>
                  <div className={style.rate}>
                    <ArrowUpRight />
                  </div>

                  <p>+40% Conversion Rate</p>
                </div>

                <div className={style.viewProject}>
                  <span>View Project</span>
                  <ArrowRight size={24} className="text-[#FCFCFC]!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // background: radial-gradient(50% 50% at 50% 50%, #D328EC 0%, #251462 100%);
  // background: radial-gradient(50% 50% at 50% 50%, #D328EC 0%, #251462 100%);
// 

};

export default FeaturedProjects;
