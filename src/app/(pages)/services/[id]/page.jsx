'use client';
import React from 'react'
import style from '../../../../Sass/services/servicesDetails.module.scss'
import Hero from '@/components/Hero'
import heroImage from '../../../../../public/assets/details.jpg'
import Offer from './Offer'
import  {CustomAccordion}  from './CustomAccordion'
import { useTranslation } from 'react-i18next'

const ServicesDetails = ({params}) => {
  const {slug} = params;
  const {t} = useTranslation();
  return (
    <div className={style.details}>
      <Hero heroImage={heroImage} title={t('services.heroDetailsTitle')}/>
      <Offer />
     <CustomAccordion />
    </div>
  )
}

export default ServicesDetails
