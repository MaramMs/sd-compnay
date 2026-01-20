import React from "react";
import style from "../../../Sass/projects/project-content.module.scss";
import Search from "./Search";
import Image from "next/image";
import feat1 from "../../../../public/assets/feat1.jpg";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectContent = () => {
  return (
    <div className={style.projectContent}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Our Projects</h2>
          <p>
            At Software Development, we launched in 2020 to deliver
            transformative projects that power businesses across the Middle
            East.
          </p>
        </div>

        <Search />

        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={feat1}
                width={568}
                height={197}
                className="rounded-2xl h-49.25 object-cover "
              />
            </div>
       <div className={style.contentCard}>
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

          <div className={style.card}>
            <div className={style.image}>
              <Image
                src={feat1}
                width={568}
                height={197}
                className="rounded-2xl h-49.25 object-cover "
              />
            </div>
       <div className={style.contentCard}>
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
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={feat1}
                width={568}
                height={197}
                className="rounded-2xl h-49.25 object-cover "
              />
            </div>
       <div className={style.contentCard}>
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
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={feat1}
                width={568}
                height={197}
                className="rounded-2xl h-49.25 object-cover "
              />
            </div>
       <div className={style.contentCard}>
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
           <div className={style.card}>
            <div className={style.image}>
              <Image
                src={feat1}
                width={568}
                height={197}
                className="rounded-2xl h-49.25 object-cover "
              />
            </div>
       <div className={style.contentCard}>
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

        <Button className={style.button}>
            Load More
            <ArrowRight size={24} color="white"/>
        </Button>
      </div>
    </div>
  );
};

export default ProjectContent;
