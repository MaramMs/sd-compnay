import React from 'react'
import style from '../../../../Sass/services/servicesDetails.module.scss'
import Hero from '@/components/Hero'
import heroImage from '../../../../../public/assets/details.jpg'
import Offer from './Offer'
import  {CustomAccordion}  from './CustomAccordion'

const ServicesDetails = ({params}) => {
  const {slug} = params;
  return (
    <div className={style.details}>
      <Hero heroImage={heroImage} title='Backend & APIs'/>
      <Offer />
     <CustomAccordion />
    </div>
  )
}

export default ServicesDetails
