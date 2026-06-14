'use client'
import Hero from '@/components/Hero'
import heroImage from '../../../../public/assets/about.jpg'
import AboutContent from './AboutContent'
import { OurTeam } from './OurTeam'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const {t } = useTranslation()
  return (
    <>
    <Hero heroImage={heroImage} title={t("about.title")} alt=''/>
    <AboutContent />
    <OurTeam />

    </>
  )
}

export default AboutUs