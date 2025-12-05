import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 transition-transform duration-300 hover:scale-y-90 hover:scale-x-110" //wiggle effect on hover
              src="/static/logos/snoopy.svg"
              width="50"
            />
            {"Authcar".split("").map((letter, index) => {
              return (
                <span
                  key={index}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                  className="
                    relative
                    inline-block                 
                    hover:animate-[wave_1.4s_ease-in-out_infinite]
                    transition-transform duration-300
                    hover:-translate-y-2 hover:scale-125
                    animate-[pinkgradient_3s_linear_infinite]
                  "
                >
                  {letter}
                </span>
              );
            })}

          </span>
        </Link>
      </li>
      {/* space-x-10 → jarak antar menu 10 (besar spacing) */}
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => { {/* daftar menu navigasi  */}
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100" //jika halaman saat ini, opacity penuh
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
