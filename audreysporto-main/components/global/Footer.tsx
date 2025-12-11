import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Github, Mail, Linkedin, Heart } from "lucide-react";

const footer = {
  columns: [
    {
      title: "Navigation",
      links: [
        { name: "Home", link: "/", leavesWebsite: false },
        { name: "Projects", link: "/projects", leavesWebsite: false },
        { name: "Profile", link: "/profile", leavesWebsite: false },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/authcar",
          leavesWebsite: true,
          icon: Github,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/audrey-theresia/",
          leavesWebsite: true,
          icon: Linkedin,
        },
        {
          name: "Email",
          link: "mailto:authcar@gmail.com",
          leavesWebsite: true,
          icon: Mail,
        },
      ],
    },
  ],
};

function Footer() {
  return (
    <footer className="relative w-screen overflow-hidden bg-gradient-to-br from-beige via-beige to-fun-pink-darker/5">
      {/* Animated decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-dark-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-medium-green/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-16 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-bg"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {footer.columns.map((column, index) => (
            <div key={index} className="space-y-5 group">
              <h4 className="text-dark-pink font-bold text-base uppercase tracking-widest flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-dark-pink to-transparent group-hover:w-12 transition-all duration-300"></span>
                {column.title}
              </h4>
              <ul className="space-y-3.5">
                {column.links.map((item, linkIndex) => (
                  <li key={linkIndex}>
                    {item.leavesWebsite ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-medium-green hover:text-dark-pink transition-all duration-300 group/link hover:translate-x-1"
                      >
                        {item.icon && (
                          <span className="mr-3 opacity-60 group-hover/link:opacity-100 group-hover/link:scale-110 transition-all duration-200">
                            {typeof item.icon === "string" ? (
                              <Image
                                src={item.icon}
                                width={18}
                                height={18}
                                alt=""
                              />
                            ) : (
                              <item.icon className="w-[18px] h-[18px]" />
                            )}
                          </span>
                        )}
                        <span className="text-sm font-medium">{item.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.link}
                        className="text-sm font-medium text-medium-green hover:text-dark-pink transition-all duration-300 inline-block hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-fun-pink-darker/30 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-medium-green text-base flex items-center gap-2 flex-wrap justify-center md:justify-start">
              <span>© 2025 Made with</span>
              <Heart className="w-4 h-4 text-dark-pink fill-dark-pink animate-pulse inline-block" />
              <span>by</span>
              <a
                href="mailto:authcar@gmail.com?subject=Hello%20Audrey"
                className="font-playwrite text-dark-pink font-medium hover:text-dark-green transition-all duration-300 hover:scale-105 inline-block relative group/name"
              >
                Audrey Theresia
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dark-pink group-hover/name:w-full transition-all duration-300"></span>
              </a>
            </p>
          </div>

          {/* View Source Button */}
          <a
            className="inline-flex items-center gap-3 font-bold text-sm border-2 border-medium-green hover:border-dark-pink px-6 py-3 rounded-xl text-dark-green hover:text-dark-pink cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/button bg-white/50 hover:bg-white/80"
            href="https://github.com/authcar/Audreys-portofolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" />
            <span>View Source Code</span>
          </a>
        </div>
        
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-beige/50 to-transparent pointer-events-none"></div>
    </footer>
  );
}

export default Footer;