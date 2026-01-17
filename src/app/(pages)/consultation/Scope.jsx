import React from "react";
import style from "../../../Sass/consultation/scope.module.scss";
import { Settings } from "lucide-react";

const Scope = () => {
  return (
    <div className={style.scope}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Consultation Scope</h2>
          <p>30-60 minute sessions, online or onsite</p>
        </div>

        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.icon}>
              <Settings color="#FCFCFC" size={32} />
            </div>
            <h2>Tech Stack Audits</h2>
            <p>
              Comprehensive analysis and optimization of your technology
              infrastructure
            </p>
            <ul>
              <li>Performance audits</li>
              <li>Performance audits</li>
              <li>Performance audits</li>
            </ul>
          </div>

           <div className={style.card}>
            <div className={style.icon}>
              <Settings color="#FCFCFC" size={32} />
            </div>
            <h2>Tech Stack Audits</h2>
            <p>
              Comprehensive analysis and optimization of your technology
              infrastructure
            </p>
            <ul>
              <li>Performance audits</li>
              <li>Performance audits</li>
              <li>Performance audits</li>
            </ul>
          </div>
           <div className={style.card}>
            <div className={style.icon}>
              <Settings color="#FCFCFC" size={32} />
            </div>
            <h2>Tech Stack Audits</h2>
            <p>
              Comprehensive analysis and optimization of your technology
              infrastructure
            </p>
            <ul>
              <li>Performance audits</li>
              <li>Performance audits</li>
              <li>Performance audits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;

