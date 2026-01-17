import React from 'react'
import ConsultationContent from './ConsultationContent';
import style from '../../../Sass/consultation/consultation-content.module.scss'
import CustomSwiper from './CustomSwiper';
import Hero from './Hero';

const Consultation = () => {
  return (
    <div className={style.consultation}>
      <Hero />
      <ConsultationContent />
    </div>
  )
}


export default Consultation;
