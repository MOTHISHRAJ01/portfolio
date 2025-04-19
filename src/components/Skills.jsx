import React from 'react';
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoFigma } from "react-icons/io5";
import { SiTailwindcss, SiMongodb, SiExpress, SiGithub, SiBehance } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: <IoLogoHtml5 />,
      level: "Intermediate",
      count: 95,
    },
    {
      name: "CSS",
      logo: <IoLogoCss3 />,
      level: "Intermediate",
      count: 95,
    },
    {
      name: "JAVASCRIPT",
      logo: <IoLogoJavascript />,
      level: "Intermediate",
      count: 75,
    },
    {
      name: "REACT",
      logo: <IoLogoReact />,
      level: "Intermediate",
      count: 80,
    },
    {
      name: "node js",
      logo: <IoLogoNodejs />,
      level: "Beginner",
      count: 50,
    },
    {
      name: "Tailwind css",
      logo: <SiTailwindcss />,
      level: "Intermediate",
      count: 75,
    },
    {
      name: "Bootstrap 5",
      logo: <BsBootstrapFill />,
      level: "Intermediate",
      count: 80,
    },
    {
      name: "Figma",
      logo: <IoLogoFigma />,
      level: "Intermediate",
      count: 70,
    },
    {
      name: "Git Hub",
      logo: <SiGithub />,
      level: "Intermediate",
      count:75,
    },
    {
      name: "Mangodb",
      logo: <SiMongodb />,
      level: "Beginner",
      count: 50,
    },
    {
      name: "Express js",
      logo: <SiExpress />,
      level: "Beginner",
      count: 50,
    },
    {
      name: "Behance",
      logo: <SiBehance />,
      level: "Intermediate",
      count: 70,
    }
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative mb-5">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12 px-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative bg-gray-900 p-4 rounded-xl flex flex-col items-center"
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
