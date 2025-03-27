import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import pw from "../assets/company/pw1.png";
import liyaans from "../assets/company/liyaans.png";
// import udrf from "../assets/company/udrf.png";
import mit from "../assets/company/mit.png";
import school from "../assets/company/backend.png";


const experiences = [
  {
    title: "Web Developer & IT Executive",
    company_name: "Liyaans Properties",
    icon: liyaans,
    iconBg: "#E6DEDD",
    date: "June 2023 - October 2024",
    points: [
      "Developing and maintaining web applications using HTML5, CSS3, JavaScript, React.js, and other related technologies.",
      "Crafting innovative and high-performing websites and web applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback.",
    ],
  },
  {
    title: "MERN Stack Developer (Apprenticeship)",
    company_name: "PW Skills",
    icon: pw,
    iconBg: "#E6DEDD",
    date: "AUG 2023 - JUN 2025",
    points: [
      "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Created RESTful APIs and integrated them with React front-end components.",
      "Deployed applications on platforms like Vercel and Netlify.",
      "Collaborated with the team using Git and GitHub for version control.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "UDRF Trust",
    icon: school,
    iconBg: "#E6DEDD",
    date: "APR 2023 - APR 2024",
    points: [
      "Developed and customized WordPress websites using themes, plugins, and custom CSS.",
      "Integrated payment gateways and third-party APIs to enable e-commerce functionalities.",
      "Optimized website performance and speed by caching and image optimization.",
    ],
  },
];

const education = [
  {
    title: "Bachelor of Technology (B.Tech)",
    school_name: "Mallabhum Institute of Technology",
    icon: mit,
    iconBg: "#E6DEDD",
    date: "2020 - 2024",
    points: [
      "Graduated with a Bachelor's degree in Computer Science Engineering.",
      "Focused on web development, cloud computing, and software engineering.",
      "Participated in tech fests and coding challenges.",
    ],
  },
  {
    title: "Diploma in information technology",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2018 - 2019",
    points: [
      "Proficiency in MS Office Suite (Word, Excel, PowerPoint, Access).",
      "Hands-on with Data Entry and Management Tools",
      "Familiarity with Accounting Software (Tally, QuickBooks)"
    ],
  },
  {
    title: "Higher Secondary Education",
    school_name: "Ramsagar high School",
    icon: school,
    iconBg: "#E6DEDD",
    date: "2018 - 2020",
    points: [
      "Studied Physics, Chemistry, and Mathematics.",
      "Participated in science exhibitions and coding events.",
    ],
  },
];

const Card = ({ data, isEducation }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={data.date}
      iconStyle={{ background: data.iconBg }}
      icon={
        <div name="experience" className="flex justify-center items-center w-full h-full">
          <img
            src={data.icon}
            alt={isEducation ? data.school_name : data.company_name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {isEducation ? data.title : data.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {isEducation ? data.school_name : data.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-3">
        {data.points.map((point, index) => (
          <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceEducationTabs = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="flex justify-center mb-8">
      <button
  className={`px-6 py-2 mx-2 flex items-center gap-2 rounded-lg ${
    activeTab === "experience" ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"
  }`}
  onClick={() => setActiveTab("experience")}
>
  <Briefcase /> Experience
</button>

<button
  className={`px-6 py-2 mx-2 flex items-center gap-2 rounded-lg ${
    activeTab === "education" ? "bg-yellow-500 text-black" : "bg-gray-700 text-white"
  }`}
  onClick={() => setActiveTab("education")}
>
  <BookOpen /> Education
</button>
      </div>

      <motion.div layout>
        <AnimatePresence>
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <VerticalTimeline>
                {experiences.map((exp, index) => (
                  <Card key={index} data={exp} isEducation={false} />
                ))}
              </VerticalTimeline>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <VerticalTimeline>
                {education.map((edu, index) => (
                  <Card key={index} data={edu} isEducation={true} />
                ))}
              </VerticalTimeline>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExperienceEducationTabs;
