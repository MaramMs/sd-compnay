import React from "react";
import style from "../../../../Sass/projects/challenges-solution.module.scss";
import { MousePointerClick, TriangleAlert } from "lucide-react";

const ChallengesAndSolution = () => {
  return (
    <div className={style.challengesAndSolution}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Challenges & Solutions</h2>
          <p>
            A comparative analysis of critical UX obstacles and their strategic
            resolutions through data-driven design interventions.
          </p>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.challenge}>
                <div className={style.icon}>
                  <TriangleAlert size={24} color='#FCFCFC'/>
                </div>
                <div className={style.challengeContent}>
                  <span>Challenge </span>
                  <h3>
                    Low User Engagement
                  </h3>
                  <p>
                    High Bounce Rates: Users were leaving the platform quickly
                    without engaging.
                  </p>
              </div>
            </div>

            <div className={style.solution}>
                  <div className={style.icon}>
                  <MousePointerClick size={24} color='#FCFCFC'/>
                </div>
                <div className={style.solutionContent}>
                  <span>Solution</span>
                  <h3>
                    Low User Engagement
                  </h3>
                  <p>
                    High Bounce Rates: Users were leaving the platform quickly
                    without engaging.
                  </p>
              </div>
            </div>
          </div>
            <div className={style.card}>
            <div className={style.challenge}>
                <div className={style.icon}>
                  <TriangleAlert size={24} color='#FCFCFC'/>
                </div>
                <div className={style.challengeContent}>
                  <span>Challenge </span>
                  <h3>
                    Low User Engagement
                  </h3>
                  <p>
                    High Bounce Rates: Users were leaving the platform quickly
                    without engaging.
                  </p>
              </div>
            </div>

            <div className={style.solution}>
                  <div className={style.icon}>
                  <MousePointerClick size={24} color='#FCFCFC'/>
                </div>
                <div className={style.solutionContent}>
                  <span>Solution</span>
                  <h3>
                    Low User Engagement
                  </h3>
                  <p>
                    High Bounce Rates: Users were leaving the platform quickly
                    without engaging.
                  </p>
              </div>
            </div>
          </div>
            <div className={style.card}>
            <div className={style.challenge}>
                <div className={style.icon}>
                  <TriangleAlert size={24} color='#FCFCFC'/>
                </div>
                <div className={style.challengeContent}>
                  <span>Challenge </span>
                  <h3>
                    Low User Engagement
                  </h3>
                  <p>
                    High Bounce Rates: Users were leaving the platform quickly
                    without engaging.
                  </p>
              </div>
            </div>

            <div className={style.solution}>
                  <div className={style.icon}>
                  <MousePointerClick size={24} color='#FCFCFC'/>
                </div>
                <div className={style.solutionContent}>
                  <span>Solution</span>
                  <h3>
                    Low User Engagement
                  </h3>
                  <p>
                    High Bounce Rates: Users were leaving the platform quickly
                    without engaging.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesAndSolution;
