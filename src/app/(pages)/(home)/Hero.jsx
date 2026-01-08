import Image from 'next/image'
import React from 'react'
import heroImage from '../../../../public/assets/mainHome.png'
import style from '@/Sass/home/hero.module.scss'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
<div> {/* Changed from pt-16 to match your 80px navbar offset */}
  <div className={style.heroSection}>
    <Image
      src={heroImage}
      alt="Hero"
      fill
      className={style.imgHero}
      priority
    />

    <div className={style.overLay}></div>

    <div className={style.heroContent}>
      <h1>
        Your Vision,<span>Our Expertise</span><br/> Let's Build It
      </h1>
      <p>
        Create scalable software solutions that drive business growth. Partner with SD to build elegant digital products.
      </p>
      <Button>
        Start Your Project
        <ArrowRight />
      </Button>
    </div>
  </div>
</div>

  )
}

export default Hero
