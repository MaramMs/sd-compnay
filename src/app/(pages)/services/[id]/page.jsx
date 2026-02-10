'use client';
import Hero from '@/components/Hero'
import { useTranslation } from 'react-i18next'
import Offer from './Offer'
import  {CustomAccordion}  from './CustomAccordion'
import style from '../../../../Sass/services/servicesDetails.module.scss'
import heroImage from '../../../../../public/assets/details.jpg'

const ServicesDetails = () => {
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
