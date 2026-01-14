import React from "react";
import style from "../../../Sass/blogs/blogs-content.module.scss";
import Search from "../projects/Search";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const blogs = [
  { id: 1, slug: "backend-development" },
  { id: 2, slug: "ui-ux-design" },
  { id: 3, slug: "fintech-solutions" },
  { id: 4, slug: "mobile-apps" },
  { id: 5, slug: "cloud-services" },
  { id: 6, slug: "ai-solutions" },
];

const BlogsContent = () => {
  return (
    <div className={style.blogContent}>
      <div className={style.container}>
        <Search />
        <div className={style.cards}>
          {blogs.map((blog) => {
            return (
              <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                <ProjectCard />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsContent;
