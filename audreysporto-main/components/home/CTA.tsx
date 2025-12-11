import React from "react";
import AnimatedBlob from "../designs/blob";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      
      <div className="interested pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Let's Keep in Touch!
        </h2>
        <AnimatedBlob
                size={200}
                variant="mediumPink"
                className="top-10 left-20"
        />
        <AnimatedBlob
        size={260}
        variant="lightGreen"
        className="bottom-5 right-10"
        delay={-4}
        />
      </div>

     
    </div>
  );
}

export default CTA;
