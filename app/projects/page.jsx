import EventCard from "@/components/event-card";
import { projects } from "@/constants";
import React from "react";

export default function Projects() {
  return (
  <div className="w-full flex items-center justify-center">
      <div className="container flex px-4 flex-col">
        <div className="flex items-center flex-col gap-1 mt-5 w-full">
          <h1
            data-aos="fade-down"
            data-aos-duration="500"
            className="text-4xl md:text-6xl my-5 font-extrabold"
          >
            Projects
          </h1>
          <p data-aos="fade-down" data-aos-duration="600" className="text-base">
            There are project showcased developed by the MRC in past with
            description
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-wrap gap-5 my-10 w-full"
        >
          {projects.map((event, i) => (
            <EventCard
              key={i}
              i={i}
              title={event.title}
              imageSrc={event.imageSrc}
              para={event.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
