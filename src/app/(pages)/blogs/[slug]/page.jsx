import Hero from "@/components/Hero";
import React from "react";
import heroImage from "../../../../../public/assets/blog.jpg";
import BlogContent from "./BlogContent";

const BlogDetails = () => {
  return (
    <>
      <Hero heroImage={heroImage} title="SD Blogs" />
      <BlogContent />
    </>
  );
};

export default BlogDetails;
