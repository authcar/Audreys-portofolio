import React from "react";

function Heading() {
  return (
    <div className="py-16  w-full text-center relative">
      <h1 className="text-4xl font-playwrite sm:text-6xl inline-block w-auto relative">
        Profile
        <img
          className="sqD w-12 -top-6 -right-11"
          src="/static/profile/sims.png"
        />
      </h1>
    </div>
  );
}

export default Heading;
