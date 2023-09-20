import React from 'react';
import CarRental from "../assets/portfolio/car new.jpg";
import MyPortfolio from "../assets/portfolio/Portfolio.jpg";
import ChatApp from "../assets/portfolio/chat-app.jpg";
import TourWebsite from "../assets/portfolio/tourwebsite.jpg";
import ExpenseTracker from "../assets/portfolio/Expense tracker.jpg";
import { FaGithub  } from 'react-icons/fa';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();



const Portfolio = () => {
    const portfolios = [
        
        {
          id: 1,
          src: MyPortfolio,
          name: "My Portfolio",
          demoLink: "https://rickpratihar-portfolio.netlify.app/", 
          githubRepo: "https://github.com/RickPratihar/React-portfolio",
          techstack: "Reactjs, Tailwind Css, Framer-motion, Aos Libery",
        },
        {
          id: 2,
          name: "Car Rental Website",
          src: CarRental,
          demoLink: "https://car-rental-172695.netlify.app/home", 
          githubRepo: "https://github.com/RickPratihar/Car-Rental-website",
          techstack: "React, Bootstrap, Css3",
        },
        {
          id: 3,
          name: "Expense Tracker ",
          src: ExpenseTracker,
          demoLink: "https://expense-tracker-rick.netlify.app/", 
          githubRepo: "https://github.com/RickPratihar/ExpenseTracker/tree/main",
          techstack: "React, Material Ui",
        },
        {
          id: 4,
          name: "Tour and Travle Website",
          src: TourWebsite,
          demoLink: "https://tour-website-rick.netlify.app/", 
          githubRepo: "https://github.com/RickPratihar/Tour-Website",
          techstack: "React, Css3",
        },
        {
          id: 5,
          name: "Chatting Application",
          src: ChatApp,
          demoLink: "https://chat-app-b77fcf.netlify.app/app", 
          githubRepo: "https://github.com/RickPratihar/mordernchatapp",
          techstack: "React v18, Mui v5, Redux",
        },
  
       
      ];
      const handleDemoButtonClick = (demoLink) => {
        window.open(demoLink, "_blank");
      };
    
      const handleCodeButtonClick = (githubRepo) => {
        window.open(githubRepo, "_blank");
      };
    
      return (
        <div
          name="Project"
          className=" from-blue-300 via-black to-gray-800"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className=" flex justify-center items-center text-5xl font-bold text-white  border-b-4 border-yellow-500 pb-4" data-aos="fade-left" >
                Projects
              </p>
              <p className="py-6 flex justify-center items-center text-white text-xl" data-aos="fade-right">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 " >
              {portfolios.map(({ id, src, demoLink, githubRepo, name, techstack }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg mb-5" data-aos="fade-down">
                  <img
                  width={1000}
                  height={1000}
                  className="max-w-full h-48 max-h-full object-cover object-fill object-top rounded-lg  duration-200 hover:scale-105 "
                    src={src}
                    alt=""
                    //className="rounded-md duration-200 hover:scale-105"
                  />
                
                  <div className="my-2 flex flex-col gap-3">
                  <h3 className="text-xl text-center text-white font-medium">
                    {name}
                  </h3>
                  <p className="text-me  px-3 text-blue-300 ">
                    <span className="font-bold text-white">Tech Stack : </span>
                    {techstack}
                  </p>
                </div>
              <div className="flex items-center justify-center pt-4">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 hover:scale-105 rounded-full bg-blue-500"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(githubRepo)}
                  className="w-1/2 px-6 py-3 text-white m-4 duration-200 hover:scale-105"
                >
                 <FaGithub size={35} />
                </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio
