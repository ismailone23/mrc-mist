import { copyRightLink, footerLink } from "@/constants";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-[#2B2C32] to-[#000000]">
      <div className="w-full px-4 flex flex-col items-center h-full bg-[url(/pattern.png)]">
        <div className="max-w-7xl items-end justify-between gap-5 w-full mt-10 flex flex-col">
          <div className="w-full flex justify-between gap-5 md:flex-row flex-col items-start md:items-end">
            <div className="w-full flex flex-col">
              <Image
                width={200}
                height={200}
                src={"/mrc-logo.png"}
                alt="mrc_logo"
              />
              <div className="flex flex-col gap-2 w-full mt-5">
                <div className="flex flex-col gap-1 w-full">
                  <h1 className="font-semibold font-roboto text-white">
                    Address:
                  </h1>
                  <p className="text-sm font-roboto text-white">
                    Military Institute of Science and Technology, Mirpur
                    Cantonment, Dhaka-1216, Bangladesh
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="font-semibold font-roboto">Contact:</h1>
                  <Link
                    className="text-sm font-roboto text-white"
                    href={"tel:+8801719323908"}
                  >
                    +8801719323908
                  </Link>
                  <Link
                    className="text-sm font-roboto text-white"
                    href={"mailto:roboticsclub@mist.ac.bd"}
                  >
                    roboticsclub@mist.ac.bd
                  </Link>
                </div>
                <div className="flex w-full flex-wrap gap-2">
                  <button className="w-10 sm:cursor-pointer h-10 flex rounded items-center justify-center bg-white">
                    <Facebook className="w-5 h-5 text-black" />
                  </button>
                  <button className="w-10 sm:cursor-pointer h-10 flex rounded items-center justify-center bg-white">
                    <Instagram className="w-5 h-5 text-black" />
                  </button>
                  <button className="w-10 sm:cursor-pointer h-10 flex rounded items-center justify-center bg-white">
                    <Twitter className="w-5 h-5 text-black" />
                  </button>
                  <button className="w-10 sm:cursor-pointer h-10 flex rounded items-center justify-center bg-white">
                    <Linkedin className="w-5 h-5 text-black" />
                  </button>
                  <button className="w-10 sm:cursor-pointer h-10 flex rounded items-center justify-center bg-white">
                    <Youtube className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full md:items-end md:justify-end">
              <div className="grid grid-cols-2 gap-2">
                {footerLink.map((link, i) => (
                  <Link
                    href={link.href}
                    key={i}
                    className="text-sm hover:underline transition-all font-semibold font-roboto duration-500 capitalize"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <hr />
            <div className="justify-between flex py-4 sm:flex-row flex-col">
              <div className="flex gap-2 md:items-center items-start">
                <Copyright className="w-4 text-white" />
                <p className="text-white font-roboto text-sm">
                  <span className="font-semibold font-roboto">
                    {new Date().getFullYear()}
                  </span>
                  MIST Robotics Club. All rights reserved.
                </p>
              </div>
              <div className="flex gap-5">
                {copyRightLink.map((link, i) => (
                  <Link
                    key={i}
                    className="underline capitalize font-roboto text-sm text-white"
                    href={link.href}
                  >
                    {link.title}
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
