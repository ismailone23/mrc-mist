"use client";
import HeroSect1 from "./Components/HeroSect1";
import Herosect2 from "./Components/Herosect2";
import HeroSect3 from "./Components/HeroSect3";

const page = () => {
  return (
   <div className="container mx-auto px-5 py-12 overflow-x-hidden">
      
      <div className="md:text-left text-center md:w-5/6 mx-auto w-full  py-10">
        <h2
          className="py-10 text-4xl md:text-6xl font-extrabold"
          data-aos="fade-down"
        >
          Teamwork in Action
        </h2>
        <p
          className="w-full md:w-3/4"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          We're excited to collaborate with the Tech Innovators Club and proudly
          supported by XYZ Corporation.
        </p>
      </div>
      <HeroSect1 />
      <Herosect2 />
      <HeroSect3 />
      <div className="container md:justify-between mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="w-full my-5 md:my-0 ">
          <h2
            className="md:text-5xl text-4xl font-extrabold text-center "
            data-aos="fade-up"
          >
            Join Us in Innovation
          </h2>
        </div>
        <div className="lg:flex-grow md:pl-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <p
            className="my-8 text-lg leading-relaxed"
            data-aos="fade-up"
            ata-aos-delay="200"
          >
            Collaborate with MIST Robotics Club and unlock your potential!
            Together with the Engineering Society, we can create groundbreaking
            projects and unforgettable experiences.
          </p>
          <div className="flex justify-center my-4 space-x-7">
            <button
              className="inline-flex hover:text-white hover:bg-transparent border-2 py-3 border-white px-7  bg-white text-indigo-950 focus:outline-none   text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Learn more
            </button>
            <button
              className="inline-flex text-white bg-transparent border-2 py-3 border-white px-7  hover:bg-white hover:text-indigo-950 focus:outline-none   text-lg"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
