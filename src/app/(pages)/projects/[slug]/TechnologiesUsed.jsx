import React from "react";
import style from "../../../../Sass/projects/technologies-used.module.scss";

const TechnologiesUsed = () => {
  return (
    <div className={style.technologiesUsed}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Technologies Used</h2>
          <p>
            Enterprise-grade technologies chosen for reliability, performance,
            and scalability at global commerce levels.
          </p>
        </div>

        <div className={style.techCards}>
          <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>

           <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>

           <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>
           <div className={style.techCard}>
            <div className={style.cardHeader}>
              <h4>Next.js</h4>

              <span>Frontend Framework</span>
            </div>

            <p>
              React framework for server-side rendering and optimal performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
