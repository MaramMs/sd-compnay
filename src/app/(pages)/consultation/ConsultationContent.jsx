import Scope from "./Scope";
import Expertise from "./expertise";
import FormConsultation from "./FormConsultation";
import style from "../../../Sass/consultation/consultation-content.module.scss";

const ConsultationContent = () => {
  return (
    <div className={style.ConsultationContent}>
      <Scope />
      <Expertise />
      <FormConsultation />
    </div>
  );
};

export default ConsultationContent;
