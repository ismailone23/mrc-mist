"use client";
import Gallery from "./Components/index";

const page = () => {
  return (
    <div className="container mx-auto px-5 py-24 overflow-x-hidden">
      <div className="py-10 text-center">
        <h2
          className="text-4xl md:text-6xl mb-4 font-extrabold"
          data-aos="fade-down"
        >
          Gallery
        </h2>
        <p data-aos="fade-down" data-aos-delay="400">
          Meet the passionatework of MIST Robotics Club.
        </p>
      </div>
      <Gallery />
    </div>
  );
};

export default page;
