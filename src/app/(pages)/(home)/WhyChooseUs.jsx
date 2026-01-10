import React from "react";
import style from "../../../Sass/home/whyChooseUs.module.scss";

const WhyChooseUs = () => {
  return (
    <div className={style.whyChooseUs}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentTitle}>
            <h3>Why Choose SD?</h3>
            <p>
              We deliver exceptional value through our expertise and dedication
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>

  </div>

  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>

  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>

  <div className={style.card}>
    <h3>Dedicated Expert Team</h3>
    <p>
      A team of professional developers and designers committed to your project success
    </p>
  </div>
</div>


          {/* <div className="grid grid-cols-2 gap-4">
            <div className="col-6">
              <div className={style.card}>
                <h3>Dedicated Expert Team</h3>
                <p>
                  A team of professional developers and designers committed to
                  your project success
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className={style.card}>
                <h3>Dedicated Expert Team</h3>
                <p>
                  A team of professional developers and designers committed to
                  your project success
                </p>
              </div>
            </div>
              <div className="col-6">
              <div className={style.card}>
                <h3>Dedicated Expert Team</h3>
                <p>
                  A team of professional developers and designers committed to
                  your project success
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className={style.card}>
                <h3>Dedicated Expert Team</h3>
                <p>
                  A team of professional developers and designers committed to
                  your project success
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
