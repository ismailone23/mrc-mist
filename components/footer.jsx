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
        <div className="max-w-7xl items-end justify-between gap-5 w-full my-10 sm:grid-cols-2 grid-cols-1 grid px-4">
          <div className="w-full flex flex-col">
            <Image
              width={200}
              height={200}
              src={"/mrc-logo.png"}
              alt="mrc_logo"
            />
            <div className="flex flex-col px-2 gap-2 w-full mt-5">
              <div className="flex flex-col gap-1 w-full">
                <h1 className="font-semibold">Address:</h1>
                <p className="text-sm">
                  Military Institute of Science and Technology, Mirpur
                  Cantonment, Dhaka-1216, Bangladesh
                </p>
              </div>
              <div className="flex flex-col w-full">
                <h1 className="font-semibold">Contact:</h1>
                <Link className="text-sm" href={"tel:+8801719323908"}>
                  +8801719323908
                </Link>
                <Link
                  className="text-sm"
                  href={"mailto:roboticsclub@mist.ac.bd"}
                >
                  roboticsclub@mist.ac.bd
                </Link>
              </div>
              <div className="flex w-full gap-2">
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
          <div className="flex gap-5 justify-end">
            <div className="flex flex-col">
              <ul>
                <li>
                  <Link className="hover:underline" href="#">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    Evenets Calender
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/projects">
                    Our Project
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    Member Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul>
                <li>
                  <Link className="hover:underline" href="#">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/projects">
                    FAQ Section
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    Volunteer Opportunities
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    News Updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 flex flex-col">
            <hr />
            <div className="justify-between flex py-4 sm:flex-row flex-col">
              <div className="flex gap-2 items-center">
                <Copyright className="w-4" />
                <p>
                  {new Date().getFullYear()} MIST Robotics Club. All rights
                  reserved.
                </p>
              </div>
              <div className="flex gap-5">
                <Link className="underline" href={"#"}>
                  Privacy Policy
                </Link>
                <Link className="underline" href={"#"}>
                  Terms Condition
                </Link>
                <Link className="underline" href={"#"}>
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
