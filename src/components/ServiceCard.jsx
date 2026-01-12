import React from 'react'
import { ArrowRight, Cloud, Server } from "lucide-react";
import { Button } from './ui/button';
import style from '../Sass/home/customSwiper.module.scss'


const ServiceCard = () => {
  return (
      <div className={style.slideContent}>
          <div className={style.serviceTitle}>
            <div className={style.iconBox}>
              <Server className={style.icon} size={50} />
            </div>
            <span>Service 1</span>
          </div>

          <div className={style.serviceDesc}>
            <h3>Backend & APIs</h3>
            <p>cRobust, secure backend architecture with reliable APIs</p>

            <Button>
              Start Your Project
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
  )
}

export default ServiceCard