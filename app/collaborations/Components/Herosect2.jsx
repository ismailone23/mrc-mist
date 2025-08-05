import { Lightbulb } from "lucide-react";
import Image from "next/image";
import React from "react";

const Herosect2 = () => {
  return (
    <div>
      <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
        <div
          className="w-full md:w-1/2 order-2 md:order-1 my-5 md:my-0 "
          data-aos="fade-left"
        >
          <Image
            width={200}
            height={200}
            className="object-cover object-center w-full h-96"
            alt="hero"
            src="/arduino.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center order-2 md:order-1">
          <Lightbulb className="w-10 mb-3 h-10 text-white animate-pulse" data-aos="fade-up"/>
          <h1
            className="title-font lg:text-4xl text-3xl mb-4 font-bold "
            data-aos="fade-up" 
          >
            Empowering Innovation: Our Collaboration with ABC Engineering
            Society
          </h1>
          <p
            className="my-8  leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are thrilled to partner with ABC Engineering Society to enhance
            our projects and initiatives. Thanks to the generous support of our
            sponsor, we are able to foster creativity and teamwork among our
            members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosect2;
