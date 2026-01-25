"use client";
import React from "react";
import style from "../../../../Sass/projects/challenges-solution.module.scss";
import { MousePointerClick, TriangleAlert } from "lucide-react";
import { useTranslation } from "react-i18next";

const ChallengesAndSolution = () => {
  const { t } = useTranslation();
  return (
    <div className={style.challengesAndSolution}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>{t("projects.challengeAndSolution")}</h2>
          <p>{t("projects.challengeAndSolutionDes")}</p>
        </div>
        <div className={style.cards}>
          {[1, 2, 3].map(() => {
            return (
              <div className={style.card}>
                <div className={style.challenge}>
                  <div className={style.icon}>
                    <TriangleAlert size={24} color="#FCFCFC" />
                  </div>
                  <div className={style.challengeContent}>
                    <span>{t("projects.challenge")}</span>
                    <h3>Low User Engagement</h3>
                    <p>
                      High Bounce Rates: Users were leaving the platform quickly
                      without engaging.
                    </p>
                  </div>
                </div>

                <div className={style.solution}>
                  <div className={style.icon}>
                    <MousePointerClick size={24} color="#FCFCFC" />
                  </div>
                  <div className={style.solutionContent}>
                    <span>{t("projects.solution")}</span>
                    <h3>Low User Engagement</h3>
                    <p>
                      High Bounce Rates: Users were leaving the platform quickly
                      without engaging.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChallengesAndSolution;
