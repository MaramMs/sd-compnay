import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/contact.jpg'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
    <Hero heroImage={heroImage} title='Contact Us'/>
      <ContactForm />
    </>
  )
}

export default Contact
