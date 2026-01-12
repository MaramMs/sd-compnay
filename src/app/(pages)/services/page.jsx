import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/services.jpg'
import ServicesContent from './ServicesContent'

const Services = () => {
  return (
    <div>
        <Hero heroImage={heroImage} title='SD Services'/>
        <ServicesContent />
    </div>
  )
}

export default Services