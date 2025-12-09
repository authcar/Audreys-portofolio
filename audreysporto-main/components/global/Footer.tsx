import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Github } from 'lucide-react';
import { Mail, Linkedin } from 'lucide-react';

const footer = {
  columns: [
    {
      title: "Navigation",
      links: [
        { name: "Home", link: "/", leavesWebsite: false },
        { name: "Projects", link: "/projects", leavesWebsite: false },
        { name: "Profile", link: "/profile", leavesWebsite: false },
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", link: "https://github.com/authcar", leavesWebsite: true, icon: Github },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/audrey-theresia/", leavesWebsite: true, icon: Linkedin },
        { name: "Email", link: "mailto:authcar@gmail.com", leavesWebsite: true, icon: Mail },
      ]
    }
  ]
};

function Footer() {
  return (
    <footer className="relative w-screen bg-beige ">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-bg"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footer.columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-dark-pink font-bold text-sm uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((item, linkIndex) => (
                  <li key={linkIndex}>
                    {item.leavesWebsite ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-medium-green hover:text-dark-pink transition-colors duration-200 group"
                      >
                        {item.icon && (
                          <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">
                            {typeof item.icon === "string" ? (
                              <Image src={item.icon} width={16} height={16} alt="" />
                            ) : (
                              <item.icon className="w-4 h-4" />
                            )}
                          </span>
                        )}

                        <span className="text-sm">{item.name}</span>
                      </a>
                    ) : (
                      <Link 
                        href={item.link}
                        className="text-sm text-medium-green hover:text-dark-pink transition-colors duration-200"
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

        {/* Divider */}
        <div className="border-t border-fun-pink-darker/30 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-medium-green text-base">
              © 2025 Made with 💖 by{" "}
              <a
                href="mailto:authcar@gmail.com?subject=Hello%20Audrey"
                className="font-playwrite text-dark-pink font-medium hover:text-dark-green transition-colors"
              >
                Audrey Theresia
              </a>
            </p>
          </div>

          {/* View Source Button */}
          <a
          className="inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border-2 border-medium-green px-4 py-2 rounded-xl text-dark-green cursor-pointer "
          href="https://github.com/authcar/Audreys-portofolio"
          target="_blank"
          rel="nooreferrer" // Website yang kamu buka tidak bisa tahu kamu datang dari website mana.
          >
            <Github className="w-6 h-6" />
            <span className="ml-2">View Source Code</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-fun-pink-darker/30">
          
          {/* Add more social icons here */}
        </div>
      </div>

      {/* Decorative background dots */}
      
    </footer>
  );
}

export default Footer;


