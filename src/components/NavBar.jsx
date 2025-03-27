import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCogs,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { id: 1, link: "home", icon: <FaHome size={24} />, label: "Home" },
    { id: 2, link: "about", icon: <FaUser size={24} />, label: "About" },
    { id: 3, link: "experience", icon: <MdOutlineWork size={24} />, label: "Experience" },
    { id: 4, link: "project", icon: <FaProjectDiagram size={24} />, label: "Projects" },
    { id: 5, link: "skills", icon: <FaCogs size={24} />, label: "Skills" },
    { id: 6, link: "service", icon: <FaServicestack size={24} />, label: "Services" },
    { id: 7, link: "contact", icon: <FaEnvelope size={24} />, label: "Contact" },
  ];

  return (
    <div>
      {/* Navbar with logo */}
      <div className="fixed top-0 left-0 w-full bg-gray-900 text-white z-30 py-4  px-4 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-yellow-400">Rick</span> Portfolio
        </h1>

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="flex space-x-8">
            {links.map(({ id, link, icon, label }) => (
              <li
                key={id}
                className="flex items-center gap-2 cursor-pointer capitalize font-medium text-lg text-white hover:scale-110 transition-transform duration-200"
              >
                {icon}
                <Link to={link} smooth duration={500}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Navbar for Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-4 z-20 shadow-lg">
          {links.map(({ id, link, icon }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="flex flex-col items-center text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
            >
              {icon}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
