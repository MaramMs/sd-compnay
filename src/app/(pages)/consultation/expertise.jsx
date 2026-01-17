import React from "react";
import style from "../../../Sass/consultation/expertise.module.scss";
import CustomSwiper from "./CustomSwiper";

const Expertise = () => {
  return (
    <div className={style.expertise}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Value of Expertise</h2>
          <p>
            Save time and costs with fast solutions. Our experience turns ideas
            into digital success.
          </p>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <span>500+</span>
            <h5>Years Experience</h5>
            <div className={style.line}></div>
          </div>
          <div className={style.card}>
            <span>500+</span>
            <h5>Years Experience</h5>
            <div className={style.line}></div>
          </div>
          <div className={style.card}>
            <span>500+</span>
            <h5>Years Experience</h5>
            <div className={style.line}></div>
          </div>
        </div>

              <CustomSwiper />

      </div>
    </div>
  );
};

export default Expertise;
