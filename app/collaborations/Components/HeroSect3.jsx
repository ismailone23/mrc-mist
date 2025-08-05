import Image from "next/image";
import React from "react";

const HeroSect3 = () => {
  return (
    <div>
      <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font lg:text-4xl text-3xl mb-4 font-bold "
            data-aos="fade-up"
          >
            Empowering Innovation Through Collaboration with Tech Innovators
            Inc.
          </h1>
          <p
            className="my-8  leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our partnership with Tech Innovators Inc. enhances our projects and
            events, providing invaluable resources and expertise. Together, we
            are fostering a culture of innovation and collaboration among
            students.
          </p>
          <div className="block md:flex justify-between  text-center md:text-left space-x-2 space-y-5">
            <div className="w-full md:w-1/2 px-2">
              <h2
                className="text-4xl font-semibold my-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                50%
              </h2>
              <p
                className="font-light text-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Join us in shaping the future of robotics.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <h2
                className="text-4xl font-semibold my-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                50%
              </h2>
              <p
                className="font-light "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Together, we innovate and inspire the next generation.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 " data-aos="fade-right">
          <Image
            width={200}
            height={200}
            className="object-cover object-center w-full h-96"
            alt="hero"
            src="/ceremony.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSect3;
