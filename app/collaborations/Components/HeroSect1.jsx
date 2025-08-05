import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSect1 = () => {
  return (
    <div>
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h4
            className="text-sm animate-pulse mb-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Unity
          </h4>
          <h1
            className="title-font lg:text-4xl text-3xl mb-4 font-bold "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Innovative Collaboration with XYZ Robotics Club
          </h1>
          <p
            className="my-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our partnership with XYZ Robotics Club enhances our projects and
            events. Together, we create opportunities for students to learn and
            grow.
          </p>
          <div className="block md:flex justify-between  text-center md:text-left space-x-2 space-y-5">
            <div className="w-full md:w-1/2">
              <h2
                className="text-xl font-semibold my-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Joint Projects
              </h2>
              <p
                className="font-light text-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Collaborating on cutting-edge robotics projects that inspire
                creativity and teamwork.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h2
                className="text-xl font-semibold my-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Event Sponsorship
              </h2>
              <p
                className="font-light text-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Proudly sponsored by Tech Innovations Inc., fueling our passion
                for robotics.
              </p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button
              className="inline-flex text-white bg-transparent border-2 py-3 border-white px-7  hover:bg-white hover:text-indigo-950 focus:outline-none   text-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Learn more
            </button>
            <button
              className="ml-4 flex bg-transparent border-0 py-3 px-7 focus:outline-none group items-center  text-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join Us
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 "
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <Image
            width={200}
            height={200}
            className="object-cover object-center w-full"
            alt="hero"
            src="/dummy.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSect1;
