import EventCard from "@/components/event-card";
import { projects } from "@/constants";
import React from "react";

export default function Projects() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-7xl w-full flex px-4 flex-col">
        <div className="flex items-center flex-col gap-4 mt-20 w-full">
          <h1 className="text-3xl font-bold uppercase font-roboto">Projects</h1>
          <p className="font-roboto">
            There are project showcased developed by the MRC in past with
            description
          </p>
        </div>
        <div className="flex flex-wrap gap-5 my-10 w-full">
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
