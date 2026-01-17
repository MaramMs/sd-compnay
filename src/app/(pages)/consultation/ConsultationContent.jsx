import React from "react";
import style from "../../../Sass/consultation/consultation-content.module.scss";
import Scope from "./Scope";
import Expertise from "./expertise";
import ContactForm from "../contact/ContactForm";
import FormConsultation from "./FormConsultation";

const ConsultationContent = () => {
  return (
    <div className={style.ConsultationContent}>
              <Scope />

      {/* <div className={style.container}>
      </div> */}
      <Expertise />
      <FormConsultation />
    </div>
  );
};

export default ConsultationContent;
