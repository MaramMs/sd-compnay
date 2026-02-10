import Hero from '@/components/Hero'
import heroImage from '../../../../public/assets/blog.jpg'
import BlogsContent from './BlogsContent'

const Blogs = () => {
  return (
    <>
        <Hero heroImage={heroImage} title='SD Blogs'/>
        <BlogsContent />
    </>
  )
}


export default  Blogs