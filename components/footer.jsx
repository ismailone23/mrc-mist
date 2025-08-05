import { copyRightLink, footerLink } from "@/constants";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-[#2B2C32] to-[#000000]">
      <div className="w-full flex flex-col items-center h-full">
        <div className="flex container gap-4 w-full flex-col py-5 px-5">
          <div className="w-full">
            <Image
              width={200}
              height={200}
              src={"/favicon.png"}
              alt="mrc_logo"
              className="w-18 h-18"
            />
          </div>
          <div className="flex flex-wrap justify-between items-start gap-10 w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl text-white font-origintech">
                MIST Robotics Club
              </h1>
              <p className="text-sm text-gray-300">
                Soar High, Sky is the Limit
              </p>
              <Link
                href={"#"}
                className="capitalize hover:underline text-white hover:decoration-dashed items-center font-bold flex gap-2"
              >
                join us
                <button className="w-5 cursor-pointer h-5 rounded-full flex items-center justify-center bg-orange-500 ">
                  <MoveRight className="text-white w-4 h-4" />
                </button>
              </Link>
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 text-white" />
                <p className="font-roboto text-sm text-white">
                  Military Institute of Science and Technology
                  <br /> Mirpur Cantonment, Dhaka-1216, Bangladesh
                </p>
              </div>
              <div className="flex gap-2">
                <Phone className="w-5 h-5 text-white" />
                <Link
                  className="text-sm font-roboto text-white"
                  href={"tel:+8801719323908"}
                >
                  +8801719323908
                </Link>
              </div>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 text-white" />
                <Link
                  className="text-sm font-roboto text-white"
                  href={"mailto:roboticsclub@mist.ac.bd"}
                >
                  roboticsclub@mist.ac.bd
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {footerLink.map((link, i) => (
                <Link
                  href={link.href}
                  key={i}
                  className="font-base hover:underline hover:decoration-dashed text-white capitalize"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-300 text-lg font-semibold">
                Follow MRC
              </h1>
              <div className="flex flex-wrap gap-2">
                <button className="relative w-10 h-10 flex items-center justify-center border-1 border-gray-700 cursor-pointer rounded-lg overflow-hidden group">
                  <Facebook className="w-5 h-5 text-gray-100 z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-sky-500 transition-all duration-300 group-hover:h-full"></span>
                </button>
                <button className="relative w-10 h-10 flex items-center justify-center border-1 border-gray-700 cursor-pointer rounded-lg overflow-hidden group">
                  <Instagram className="w-5 h-5 text-gray-100 z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-rose-500 transition-all duration-300 group-hover:h-full"></span>
                </button>
                <button className="relative w-10 h-10 flex items-center justify-center border-1 border-gray-700 cursor-pointer rounded-lg overflow-hidden group">
                  <Twitter className="w-5 h-5 text-gray-100 z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-sky-500 transition-all duration-300 group-hover:h-full"></span>
                </button>
                <button className="relative w-10 h-10 flex items-center justify-center border-1 border-gray-700 cursor-pointer rounded-lg overflow-hidden group">
                  <Linkedin className="w-5 h-5 text-gray-100 z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-sky-600 transition-all duration-300 group-hover:h-full"></span>
                </button>
                <button className="relative w-10 h-10 flex items-center justify-center border-1 border-gray-700 cursor-pointer rounded-lg overflow-hidden group">
                  <Youtube className="w-5 h-5 text-gray-100 z-10" />
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition-all duration-300 group-hover:h-full"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col py-5 ">
            <div className="w-full h-1 border-t border-gray-600" />
            <div className="flex w-full justify-between flex-wrap gap-5">
              <h1 className="flex flex-wrap text-white items-center gap-2">
                <span className="items-center flex gap-2">
                  Copyright <Copyright className="text-white w-4 h-4" />
                </span>
                <span className="font-semibold">
                  {new Date().getFullYear()}
                </span>
                <span>| MIST Robotics Club</span>
              </h1>
              <div className="flex flex-wrap gap-1">
                <h1>Crafted By</h1>
                {copyRightLink.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={`hover:underline font-medium font-origintech hover:decoration-dashed text-white capitalize`}
                  >
                    {link.title} {i == copyRightLink.length - 1 ? "" : " | "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
