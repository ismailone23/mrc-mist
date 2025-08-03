import EventCard from "@/components/event-card";
import { events } from "@/constants";
import React from "react";

export default function Events() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-7xl w-full flex px-4 flex-col">
        <div className="flex items-center flex-col gap-4 mt-20 w-full">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-3xl font-bold uppercase font-roboto"
          >
            Events
          </h1>
          <p data-aos="fade-up" data-aos-duration="800" className="font-roboto">
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
