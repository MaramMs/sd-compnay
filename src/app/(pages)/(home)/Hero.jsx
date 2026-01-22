import Image from 'next/image'
import React from 'react'
import heroImage from '../../../../public/assets/mainHome.png'
import style from '@/Sass/home/hero.module.scss'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className={style.heroSection}>
  {/* <div className={style.imageWrapper}>
    {/* <Image
      src={heroImage}
      alt="Hero"
      fill
      className={style.imgHero}
      priority
    /> */}
  {/* </div>  */}

  <div className={style.heroContent}>
    <div className={style.item}>
      <h1>
        Your Vision,
        <span>Our Expertise</span><br />
        Let's Build It
      </h1>
      <p>
        Create scalable software solutions that drive business growth. Partner with SD to build elegant digital products.
      </p>
    </div>

    <Button>
      Start Your Project
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