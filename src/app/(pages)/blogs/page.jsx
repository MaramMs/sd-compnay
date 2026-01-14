import Hero from '@/components/Hero'
import React from 'react'
import heroImage from '../../../../public/assets/blog.jpg'
import BlogsContent from './BlogsContent'

const Blogs = () => {
  return (
    <div>
        <Hero heroImage={heroImage} title='SD Blogs'/>
        <BlogsContent />
    </div>
  )
}


export default  Blogs