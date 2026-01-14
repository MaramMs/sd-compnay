import React from "react";
import style from "../Sass/project-card.module.scss";
import blog1 from "../../public/assets/blog1.jpg";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ProjectCard = () => {
  return (
    <Card className={style.card}>
      <div className={style.title}>
        <div className={style.titleInfo}>
          <h2>
            Unlocking the Power of AI in Your Marketing Strategy: Insights from
            AIMF’s Slack Community
          </h2>
          <Button>
            Read More
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>

      <CardContent className={style.content}>
        <CardTitle className={style.contentTitle}>
          <span className={style.date}>Jan 6, 2025</span>
          <span className={style.category}>Artificial Intelligence</span>
        </CardTitle>
        <CardDescription className={style.des}>
          Introduction In the fast-paced world of marketing, the integration of
          Artificial Intelligence (AI) has become more than a trend—it’s
          essential for companies aiming to stay ahead..
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
