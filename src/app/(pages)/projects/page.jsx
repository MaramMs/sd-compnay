import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/project.jpg';
import style from '../../../Sass/projects/project.module.scss'
import ProjectContent from './projectContent';

const Projects = () => {
  return (
    <div className={style.project}>
     <Hero heroImage={heroImage} title='SD Projects'/> 
     <ProjectContent />
    </div>
  )
}

export default Projects
