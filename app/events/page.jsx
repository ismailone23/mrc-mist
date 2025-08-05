import EventCard from "@/components/event-card";
import { events } from "@/constants";
import React from "react";

export default function Events() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="container flex px-4 flex-col">
        <div className="flex items-center flex-col gap-1 mt-5 w-full">
          <h1
            data-aos="fade-down"
            data-aos-duration="600"
            className="text-4xl font-bold"
          >
            Events
          </h1>
          <p data-aos="fade-down" data-aos-duration="800" className="text-sm">
            Events Organized By MRC
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex flex-wrap gap-5 my-10 w-full"
        >
          {events.map((event, i) => (
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
