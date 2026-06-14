'use client'
import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/contact.jpg'
import ContactForm from './ContactForm'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {t } = useTranslation()
  return (
    <>
    <Hero heroImage={heroImage} title={t("contact.title")}/>
      <ContactForm />
    </>
  )
}

export default Contact
