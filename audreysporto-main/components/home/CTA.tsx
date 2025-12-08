import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      
      <div className="interested pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Let's Keep in Touch!
        </h2>
        <a
          href="mailto:authcar@gmail.com?subject=Hello%20Audrey"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-medium-pink hover:border-medium-pink transition-colors"
        >
          Get in Touch
        </a>
      </div>

     
    </div>
  );
}

export default CTA;
