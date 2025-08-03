"use client";
import Card from "@/components/card";
import Landing from "@/components/landing";
import PhotoCard from "@/components/photo-card";
import { Coffee, Flame, Lightbulb, Package } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full items-center flex flex-col justify-center">
      <Landing />
      <div className="max-w-7xl w-full flex flex-col px-4 items-start">
        <div
          className="w-full my-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image
            src={"/home-robo-club.png"}
            width={1200}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="home_robotics_club"
          />
        </div>
        <div className="flex flex-col w-full my-10">
          <h1
            data-aos="fade-right"
            data-aos-duration="800"
            className="text-3xl font-bold font-origintech"
          >
            Explore the Exciting World of MIST <br />
            Robotics Club Activities
          </h1>
          <div className="grid mt-10 lg:grid-cols-3 gap-10 md:grid-cols-2 justify-between w-full">
            <Card
              data-aos="fade-right"
              data-aos-duration="800"
              Icon={Package}
              btn="More"
              heading="Long heading is what you see here in this feature section"
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi ab perspiciatis nemo assumenda dicta minus, hic iusto
                  corporis distinctio eos, cumque debitis quis vitae a."
              link="#"
            />

            <Card
              data-aos="fade-up"
              data-aos-duration="800"
              Icon={Lightbulb}
              btn="Join"
              heading="Join Us for Engaging Workshops and Skill-Building Sessions"
              para="Our workshops are designed to enhance your technical skills
                  and creativity."
              link="#"
            />
            <Card
              data-aos="fade-left"
              data-aos-duration="800"
              btn="Sign Up"
              Icon={Flame}
              heading="Compete with Us in Thrilling Robotics Competitions and Challenges"
              para="Showcase your talents and teamwork in exciting competitions
                  throughout the year."
              link="#"
            />

            <Card
              data-aos="fade-right"
              data-aos-duration="800"
              Icon={Coffee}
              btn="Join"
              heading="Connect and Network at Our Fun Social Events"
              para="Join us for social gatherings that foster friendships and
                  collaboration."
              link="#"
            />
          </div>
        </div>
      </div>
      <div className="bg-[url(/rover-mist.jpeg)] bg-cover relative bg-center bg-fixed w-full bg-no-repeat">
        <div className="w-full h-full bg-black opacity-85 flex items-center z-0 justify-center absolute top-0 left-0" />
        <div className="w-full h-full flex items-center z-0 justify-center">
          <div className="max-w-7xl mt-20 flex flex-col px-4 w-full my-20 z-10">
            <div className="grid md:grid-cols-2 gap-y-5 grid-cols-1 my-20">
              <h1
                data-aos="fade-right"
                data-aos-duration="800"
                className="text-white font-semibold text-3xl font-origintech break-words"
              >
                Join MIST Robotics Club: Your Gateway to Innovation and
                Collaboration
              </h1>
              <p
                data-aos="fade-left"
                data-aos-duration="800"
                className="text-white text-sm"
              >
                Becoming a member of the MIST Robotics Club is easy and
                rewarding. Simply sign up through our website and attend our
                introductory meeting. Engage in exciting projects, workshops,
                and events that enhance your skills and connect you with
                like-minded peers.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 w-full md:grid-cols-2 grid-cols-1">
              <PhotoCard
                data-aos="fade-left"
                data-aos-duration="800"
                btn={"Join"}
                imgSrc={"/home-1sld.jpeg"}
                para={
                  "Participate in hands-on activities that foster learning and teamwork"
                }
                title={
                  "Discover Opportunities: Get Involved in Robotics Projects and Events"
                }
              />
              <PhotoCard
                data-aos="fade-up"
                data-aos-duration="800"
                btn={"Learn"}
                imgSrc={"/home-2sld.jpg"}
                para={
                  "Keep an eye on our calendar for upcoming events and opportunities"
                }
                title={"Stay Updated: Follow Our Events and Workshops"}
              />
              <PhotoCard
                data-aos="fade-right"
                data-aos-duration="800"
                btn={"Engage"}
                imgSrc={"/home-3sld.jpg"}
                para={
                  "Connect with Peers: Build Lasting Relationships in Robotics"
                }
                title={
                  "Connect with Peers: Build Lasting Relationships in Robotics"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20 flex w-full ">
        <div className="w-full flex gap-5 items-center flex-col">
          <div className="max-w-7xl grid px-4 md:grid-cols-2 w-full grid-cols-1">
            <h1
              data-aos="fade-left"
              data-aos-duration="800"
              className="text-3xl font-bold font-origintech"
            >
              Join the Exciting World <br />
              of Robotics Today!
            </h1>
            <div className="flex gap-2 flex-col">
              <p
                data-aos="fade-right"
                data-aos-duration="800"
                className="text-sm"
              >
                Welcome to the MIST Robotics Club, where innovation meets
                collaboration. Dive into hands-on projects, engaging events, and
                a community of like-minded enthusiasts eager to explore the
                future of technology.
              </p>
              <div className="flex gap-2">
                <button className="px-5 py-2 transition-all duration-300 bg-white hover:bg-[#67E78B] text-black font-origintech">
                  JOIN
                </button>
                <button className="px-5 py-2 transition-all duration-300 text-white hover:bg-[#67E78B] hover:text-black hover:border-[#67E78B] font-origintech bg-black border border-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="relative w-full aspect-[16/9]"
          >
            <Image
              src="/encourage.jpg"
              alt="home_robotics_club"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
