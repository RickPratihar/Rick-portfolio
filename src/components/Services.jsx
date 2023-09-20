import React from "react";
import { FaPaintBrush } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Services = () => {
  const service = [
    {
      id: 1,
      title: "Web Development",
      des: " Elevate your online presence with our web development expertise. We create cutting-edge, responsive websites tailored to your needs, ensuring a seamless user experience. Your digital success starts here.",
      style: "shadow-red-500",
    },
    {
      id: 2,
      title: "WordPress",
      des: " Unlock the power of WordPress with our expert developers. We customize, optimize, and maintain WordPress websites for seamless performance and stunning design. Your digital vision, our WordPress expertise.",
      style: "shadow-blue-500",
    },
  ];

  return (

    <div name="service" className=" from-gray-800 via-black to-blue-300 pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            className="flex justify-center items-center text-5xl font-bold text-white border-b-4 border-yellow-500 pb-4"
            data-aos="fade-down"
          >
            Services
          </p>
          <p
            className="py-6 flex justify-center items-center text-white text-xl"
            data-aos="fade-right"
          >
            Here is my some provide services...
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0"
          data-aos="fade-up"
        >
          {service.map(({ id, title, des,style, }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg  p-8 ${style} mb-5` }
              data-aos="fade-down"  >
                <FaPaintBrush/>
              <h2 className="mt-4 mb-5">{title}</h2>
              <p>{des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
