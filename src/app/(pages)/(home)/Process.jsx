import React from "react";
import style from "../../../Sass/home/process.module.scss";
import { Search,Palette,CodeXml,Rocket } from 'lucide-react';

const processItems = [
  {
    number: "01",
    icon: <Search size={24}/>,
    title: "Ideation",
    description:
      "Brainstorming and conceptualizing innovative ideas to kickstart the project.",
  },
  {
    number: "02",
    icon:<Palette size={24}/>,
    title: "Ideation",
    description:
      "Brainstorming and conceptualizing innovative ideas to kickstart the project.",
  },
  {
    number: "03",
    icon:<CodeXml size={24}/>,
    title: "Ideation",
    description:
      "Brainstorming and conceptualizing innovative ideas to kickstart the project.",
  },
  {
    number: "04",
    icon:<Rocket size={24}/>,
    title: "Ideation",
    description:
      "Brainstorming and conceptualizing innovative ideas to kickstart the project.",
  },
];
const Process = () => {
  return (
    <div className={style.process}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.contentTitle}>
            <h3>Our Process</h3>
            <p>
              A clear, organized methodology to turn your ideas into reality{" "}
            </p>
          </div>
          <div className="grid! grid-cols-2! md:grid-cols-4! gap-4! md:gap-6">
            {processItems.map((item, index) => (
              <div key={index} className={style.processItem}>
                <div className={style.processNumber}>
                  <div className={style.icon}>
                    {item.icon}
                  </div>
                    <h4>{item.number}</h4>

                </div>
                <div className={style.processContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
