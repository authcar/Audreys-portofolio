"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="
          relative heroElem w-full pt-64 pb-40 m-auto flex justify-center text-center 
          flex-col items-center z-1 
          bg-[url('/static/strawberry.jpg')] bg-cover bg-center bg-no-repeat 
        "
      >
        <h1 className=" text-green-400 heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-24 font-bold heroShinyBg">
          I like making{" "}
          <span className="heroShiny1 text-medium-pink">websites</span>{" "}
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
        </h1>

        <ScrollLink
          activeClass="active"
          to="interested"
          spy={true}
          offset={-30}
          smooth={true}
          duration={700}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-dark-pink border-4 text-xl rounded-full border-dark-green bg-beige hover:bg-medium-pink hover:text-dark-pink  transition-colors">
            Connect
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
