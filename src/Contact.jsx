import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen from-blue-300 via-black to-gray-800"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p
            className="flex justify-center items-center text-5xl font-bold text-white  border-b-4 border-yellow-500 pb-4"
            data-aos="fade-down"
          >
            Contact
          </p>
          <p
            className="py-6 flex justify-center items-center text-white text-xl"
            data-aos="fade-right"
          >
            Submit the form below to get in touch with me
          </p>
        </div>

        <div
          className=" flex justify-center items-center  "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          
        >
          <form
            action="https://formspree.io/f/mqkvdape"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 overflow-y-hidden"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required autoComplete="off"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required autoComplete="off"
            />

            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" required
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              data-aos="fade-up"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
