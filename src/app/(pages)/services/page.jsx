'use client'
import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/services.jpg'
import ServicesContent from './ServicesContent'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const   { t } = useTranslation();
  return (
    <div>
        <Hero heroImage={heroImage} title={t('services.heroTitle')}/>
        <ServicesContent />
    </div>
  )
}

export default Services