import React from "react";
import style from "../../../../Sass/projects/rate.module.scss";
import Image from "next/image";
import num from "../../../../../public/num.svg";
const Rate = () => {
  return (
    <div className={style.rate}>
      <div className={style.container}>
        <div className={style.tools}>
          <div className={style.title}>
            <div className={style.titleImage}>
              <Image src={num} />
              <h3>The Numbers Don't Lie</h3>
            </div>

            <p>
              Real results. Real revenue impact. Real ROI delivered in record
              time.
            </p>
          </div>
          <div className={style.toolsItem}>
            <div className={style.item}>
              <h4>150%</h4>
              <span>Languages</span>

              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>

            <div className={style.item}>
              <h4>60%</h4>
              <span>Languages</span>

              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>

            <div className={style.item}>
              <h4>200%</h4>
              <span>Languages</span>

              <p>Node.js, Python (Django/FastAPI), PHP (Laravel), Go.</p>
              <div className={style.line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
