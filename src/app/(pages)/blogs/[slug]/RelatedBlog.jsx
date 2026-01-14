import React from 'react'
import style from '../../../../Sass/blogs/related-blog.module.scss'
import ProjectCard from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const RelatedBlog = () => {
  return (
    <div className={style.relatedBlog}>
        <div className={style.title}>
            <h2>Related Blogs</h2>
            <Button>
View All Blogs
<ArrowRight />
            </Button>

        </div>
        <div className={style.cards}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>

    </div>
  )
}

export default RelatedBlog