import React from "react";
import style from "../../../../Sass/blogs/blog-content.module.scss";
import RelatedBlog from "./RelatedBlog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";

const BlogContent = () => {
  return (
    <div className={style.blogContent}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentItem}>
            <div className={style.title}>
              <div className={style.author}>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2>
                  by<span>Ahmed Mansour</span>
                </h2>
              </div>
              <div className={style.date}>
                <Calendar color="#D328EC" size={24}/>
                <span>Jan 6, 2025</span>
              </div>
            </div>
            <div className={style.des}>
              <h3>
                The Psychology of Dark Mode: Balancing Aesthetic Luxury with
                Optimal Readability
              </h3>
              <p>
                Designing for dark interfaces requires much more than simply
                swapping background colors from white to black. It is a complex,
                strategic process of managing contrast ratios to prevent eye
                strain, choosing the right typography weights to ensure clarity,
                and maintaining a balanced visual hierarchy. In this deep dive,
                we explore how subtle shadows, neon accents, and glowing borders
                can create a sense of depth that is often lost in flat designs.
                We also analyze user behavior data to understand why dark mode
                has become the preferred choice for modern tech platforms,
                ensuring that every interactive element remains accessible,
                inclusive, and intuitive for all users, even in the most
                challenging low-light environments...
              </p>
              <p>
                Designing for dark interfaces requires much more than simply
                swapping background colors from white to black. It is a complex,
                strategic process of managing contrast ratios to prevent eye
                strain, choosing the right typography weights to ensure clarity,
                and maintaining a balanced visual hierarchy. In this deep dive,
                we explore how subtle shadows, neon accents, and glowing borders
                can create a sense of depth.
              </p>
              <p>
                Designing for dark interfaces requires much more than simply
                swapping background colors from white to black. It is a complex,
                strategic process of managing contrast ratios to prevent eye
                strain, choosing the right typography weights to ensure clarity,
                and maintaining a balanced visual hierarchy. In this deep dive,
                we explore how subtle shadows, neon accents, and glowing borders
                can create a sense of depth that is often lost in flat designs.
                We also analyze user behavior data to understand why dark mode
                has become the preferred choice for modern tech platforms,
                ensuring that every interactive element remains accessible,
                inclusive, and intuitive for all users, even in the most
                challenging low-light environments...
              </p>
            </div>
          </div>
        </div>

        <RelatedBlog />
      </div>
    </div>
  );
};

export default BlogContent;
