"use client";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Package,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full items-center flex flex-col justify-center">
      <div className="max-w-7xl w-full flex flex-col px-4 items-start">
        <div className="w-full my-10">
          <Image
            src={"/home-robo-club.png"}
            width={1200}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="home_robotics_club"
          />
        </div>
        <div className="flex flex-col w-full my-10">
          <h1 className="text-3xl font-bold font-origintech">
            Explore the Exciting World of MIST <br />
            Robotics Club Activities
          </h1>
          <div className="grid mt-10 lg:grid-cols-3 gap-5 md:grid-cols-2 justify-between w-full">
            <div className="flex flex-col">
              <Package className="h-8 w-8" />
              <div className="flex flex-col py-2 gap-y-2">
                <h1 className="font-semibold">
                  Long heading is what you see here in this feature section
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi ab perspiciatis nemo assumenda dicta minus, hic iusto
                  corporis distinctio eos, cumque debitis quis vitae a.
                </p>
                <Link
                  href={"#"}
                  className="flex justify-center py-2 bg-[#67E78B] hover: w-40 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
                >
                  Learn More <ChevronRight className="w-5 h-5 text-black" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <Package className="h-8 w-8" />
              <div className="flex flex-col py-2 gap-y-2">
                <h1 className="font-semibold">
                  Join Us for Engaging Workshops and Skill-Building Sessions
                </h1>
                <p className="text-sm">
                  Our workshops are designed to enhance your technical skills
                  and creativity.
                </p>
                <Link
                  href={"#"}
                  className="flex justify-center py-2 bg-[#67E78B] hover: w-40 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
                >
                  Learn More <ChevronRight className="w-5 h-5 text-black" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <Package className="h-8 w-8" />
              <div className="flex flex-col py-2 gap-y-2">
                <h1 className="font-semibold">
                  Compete with Us in Thrilling Robotics Competitions and
                  Challenges
                </h1>
                <p className="text-sm">
                  Showcase your talents and teamwork in exciting competitions
                  throughout the year.
                </p>
                <Link
                  href={"#"}
                  className="flex justify-center py-2 bg-[#67E78B] hover: w-28 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
                >
                  Sign Up <ChevronRight className="w-5 h-5 text-black" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <Package className="h-8 w-8" />
              <div className="flex flex-col py-2 gap-y-2">
                <h1 className="font-semibold">
                  Connect and Network at Our Fun Social Events
                </h1>
                <p className="text-sm">
                  Join us for social gatherings that foster friendships and
                  collaboration.
                </p>
                <Link
                  href={"#"}
                  className="flex justify-center py-2 bg-[#67E78B] hover: w-28 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
                >
                  Join Us
                  <ChevronRight className="w-5 h-5 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/rover-mist.jpeg)] bg-cover relative bg-center bg-fixed w-full bg-no-repeat">
        <div className="w-full h-full bg-black opacity-85 flex items-center z-0 justify-center absolute top-0 left-0" />
        <div className="w-full h-full flex items-center z-0 justify-center">
          <div className="max-w-7xl mt-20 flex flex-col px-4 w-full my-20 z-10">
            <div className="grid md:grid-cols-2 gap-y-5 grid-cols-1 my-20">
              <h1 className="font-semibold text-3xl font-origintech break-words">
                Join MIST Robotics Club: Your Gateway to Innovation and
                Collaboration
              </h1>
              <p className="text-sm">
                Becoming a member of the MIST Robotics Club is easy and
                rewarding. Simply sign up through our website and attend our
                introductory meeting. Engage in exciting projects, workshops,
                and events that enhance your skills and connect you with
                like-minded peers.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 w-full md:grid-cols-2 grid-cols-1">
              <div className="flex hover:scale-105 transition-all duration-500 flex-col gap-2 w-full">
                <div className="w-full h-52 overflow-hidden">
                  <Image
                    alt="drone_show"
                    src={"/home-1sld.jpeg"}
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="font-bold">
                  Discover Opportunities: Get Involved in Robotics Projects and
                  Events
                </h1>
                <p className="font-normal text-sm">
                  Participate in hands-on activities that foster learning and
                  teamwork.
                </p>
                <button className="flex items-center">
                  Join <ChevronRight />
                </button>
              </div>
              <div className="flex hover:scale-105 transition-all duration-500 flex-col gap-2 w-full">
                <div className="w-full h-52 overflow-hidden">
                  <Image
                    alt="mars_rover"
                    src={"/home-2sld.jpg"}
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="font-bold">
                  Stay Updated: Follow Our Events and Workshops
                </h1>
                <p className="font-normal text-sm">
                  Keep an eye on our calendar for upcoming events and
                  opportunities.
                </p>
                <button className="flex items-center">
                  Learn <ChevronRight />
                </button>
              </div>
              <div className="flex hover:scale-105 transition-all duration-500 flex-col gap-2 w-full">
                <div className="w-full h-52 overflow-hidden">
                  <Image
                    alt="communication"
                    src={"/home-3sld.jpg"}
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="font-bold">
                  Connect with Peers: Build Lasting Relationships in Robotics
                </h1>
                <p className="font-normal text-sm">
                  Join a community that shares your passion for robotics and
                  technology.
                </p>
                <button className="flex items-center">
                  Engage <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-20 flex w-full px-4">
        <div className="w-full flex flex-col">
          <div className="grid md:grid-cols-2 w-full grid-cols-1">
            <h1 className="text-3xl font-bold font-origintech">
              Join the Exciting World <br />
              of Robotics Today!
            </h1>
            <div className="flex gap-2 flex-col">
              <p className="text-sm">
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
          <div className="relative w-full my-10 h-[500px]">
            <Image
              src="/encourage.jpg"
              alt="home_robotics_club"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
