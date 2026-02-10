'use client'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/Hero'
import heroImage from '../../../../public/assets/services.jpg'
import ServicesContent from './ServicesContent'

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