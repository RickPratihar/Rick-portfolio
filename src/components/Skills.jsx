import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import mongoDB from "../assets/mongoDB.png";
import git from "../assets/gitlogo.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import BootStrap from "../assets/Bootstrap.png";
import Netlify from "../assets/netlify.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";


import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: react,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: mongoDB,
          title: "mongoDB",
          style: "shadow-green-800",
        },
        {
          id: 7,
          src: git,
          title: "git",
          style: "shadow-yellow-700",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: Netlify,
          title: "netlify",
          style: "shadow-blue-600",
        },
        {
          id: 10,
          src: node,
          title: "node",
          style: "shadow-blue-400",
        },
        {
          id: 11,
          src: redux,
          title: "REDUX",
          style: "shadow-purple-400",
        },
        {
          id: 12,
          src: BootStrap,
          title: "Bootstrap",
          style: "shadow-blue-400",
        },
      ];
    
      return (
        <div 
          name="skills"
          className=" from-gray-800 via-black to-blue-300 pt-20"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="flex justify-center items-center text-5xl font-bold text-white border-b-4 border-yellow-500 pb-4" data-aos="fade-up">
                SKILLS
              </p>
              <p className="py-6 flex justify-center items-center text-white text-xl" data-aos="fade-right">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0" data-aos="fade-up">
              {techs.map(({ id, src, title, style }) => (
                <div data-aos="fade-up"
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Skills