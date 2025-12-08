import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-2 items-center mb-16">
      

      {/* Main Profile Image */}
      <div className="flex md:justify-center">
        <img
          className="h-96 w-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-3"
          src={designs[0].img}
        />
      </div>
      {/* Text Section */}
      <div className="relative">
        <h1 className="font-playwrite text-3xl sm:text-4xl mb-10 text-dark-pink">
          Audrey Theresia Carmanto
        </h1>

        <p className="text-sm sm:text-base leading-relaxed text-justify">
          Hi, I’m Audrey! A curious and fast-learning Informatics student
          with a keen interest in <strong>front-end and back-end web development. </strong>
          I have hands-on experience in building responsive interfaces using
          <strong> JavaScript, TypeScript</strong> and designing backend logic with <strong>Python and SQL. </strong> 
          I thrive in dynamic environments where I can solve challenging problems
          while honing both my technical and soft skills.
        </p>

        {/* Decorative Image */}
        <img
          className="h-20 w-auto absolute -left-28 bottom-0 transition-transform duration-300 hover:scale-y-90 hover:scale-x-110"
          src={designs[3].img}
        />
      </div>


    </div>
  );
}

export default Designs;
