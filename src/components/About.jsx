import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

//import MyImage from "../assets/tahneetk.png";

function About() {
  return (
    <div
      name="about"
      className="w-full pt-20 h-screen  from-gray-800 via-black to-blue-300 md:min-h-[75vh] relative "
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:mx-52 md:mt-20" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <motion.Typography
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-normal text-xl text-align: justify  text-blue-200  m-5 md:m-0 p-6 md:ml-5 mt-5 md:w-5/6 lg:w-4/5 xl:w-3/4 bg-blue-200 rounded-md shadow-2xl drop-shadow-sm backdrop-blur-md bg-opacity-20 max-h-[70vh] overflow-y-auto"
        >
          <Typography
            className=" text-5xl text-blue-400 font-bold text-center mt-2 mb-5 border-b-2 border-yellow-500 pb-4"
          
          >
            About Me
          </Typography>
          {/* <RxTriangleLeft className="absolute top-10 -left-10 text-white text-[70px] lg-max:hidden" /> */}
          I'm{" "}
          <span className="font-bold mx-2 text-blue-400">Rick Pratihar </span>{" "}
          from in India. Enthusiastic and dedicated software engineering graduate with a
            strong passion for front-end development using React.js. Eager to
            apply my skills and knowledge to create engaging and user-friendly
            web applications while continuously learning and growing in a
            collaborative team environment
          <br />
          <br />
          My educational background includes a Bachelor of Engineering degree in
          computer science engineering
          <span className="font-bold mx-2 text-blue-400 ">
            {" "}
            Mallabhum institute of technology.
          </span>
          <br />
          <br />
          My skills include proficiency in HTML, CSS, JavaScript, React, Redux,
          wordPress, Tailwind CSS, MongoDb, SQL, Github, Visual Studio Code,
          Netlify.
          <br />
          <br />I have completed various projects, including
          <span className="font-bold mx-2 text-blue-400">
            a Car Rental Website, Tour and Travle website, Movie Website,
            Expense Tracker, Chatting Application
          </span>
          which not only demonstrate my technical expertise but also showcase my
          strong attention to detail. I am dedicated to delivering high-quality
          solutions and crafting visually appealing and interactive user
          interfaces, web applications . which demonstrate my technical
          expertise and attention to detail.
          <br />
          <br />
          As a frontend developer passionate about User-frindly web application
          , I am always eager to learn and explore the latest technologies. My
          ultimate goal is to create exceptional web Application that make a
          positive impact on users and contribute to the ever-evolving world of
          software development.
          <br />
        </motion.Typography>
      </div>
    </div>
  );
}

export default About;
