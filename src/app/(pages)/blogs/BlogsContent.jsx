import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Search from "../projects/Search";
import style from "../../../Sass/blogs/blogs-content.module.scss";
import {blogs} from '@/data/blogs'
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
