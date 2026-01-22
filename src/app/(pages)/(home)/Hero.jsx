'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '../../../../public/assets/mainHome.png'
import style from '@/Sass/home/hero.module.scss'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
const Hero = () => {
   const { t } = useTranslation();
  const { mounted, isRTL, currentLanguage } = useLanguage();

  if (!mounted) return null;
  return (
    <div className={style.heroSection}>
  <div className={style.heroContent}>
    <div className={style.item}>
      <h1>
        {t('hero.title1')}
        <span>{t('hero.title2')}</span><br />
        {t('hero.title3')}
      </h1>
      <p>
        {t('hero.subtitle')}
      </p>
    </div>

    <Button>
      {t('common.start')}
      <ArrowRight />
    </Button>
  </div>
     <div className={style.icon}>
        <FaWhatsapp size={38} color="white" />
      </div>
</div>



  )
}

export default Hero