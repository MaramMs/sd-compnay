import Hero from "@/components/Hero";
import BlogContent from "./BlogContent";
import heroImage from "../../../../../public/assets/blog.jpg";

const BlogDetails = () => {
  return (
    <>
      <Hero heroImage={heroImage} title="SD Blogs" />
      <BlogContent />
    </>
  );
};

export default BlogDetails;
