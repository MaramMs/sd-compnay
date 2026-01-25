'use client'
import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/project.jpg';
import style from '../../../Sass/projects/project.module.scss'
import ProjectContent from './projectContent';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const {t} = useTranslation()
  return (
    <div className={style.project}>
     <Hero heroImage={heroImage} title={t('projects.heroTitle')}/> 
     <ProjectContent />
    </div>
  )
}

export default Projects
