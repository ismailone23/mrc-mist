"use client";
import { useEffect } from "react";
import AOS from "aos";
import Team25 from "./Components/Team25";
import Team24 from "./Components/Team24";
import Team23 from "./Components/Team23";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-x-hidden px-5 py-24">
      <div className="py-10 text-center">
        <h4 className="text-sm my-5" data-aos="fade-down">
          Innovate
        </h4>
        <h2
          className="text-4xl md:text-6xl mb-4 font-extrabold"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Our Team
        </h2>
        <p data-aos="fade-down" data-aos-delay="600">
          Meet the passionate leaders of MIST Robotics Club.
        </p>
      </div>

      <Team25 />
      <Team24 />
      <Team23 />
    </div>
  );
};

export default page;
