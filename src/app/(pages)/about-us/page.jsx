import React from 'react'
import Hero from '@/components/Hero'
import heroImage from '../../../../public/assets/about.jpg'
import AboutContent from './AboutContent'
import { OurTeam } from './OurTeam'

const AboutUs = () => {
  return (
    <>
    <Hero heroImage={heroImage} title='About SD'/>
    <AboutContent />
    <OurTeam />

    </>
  )
}

export default AboutUs