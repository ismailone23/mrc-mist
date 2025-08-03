"use client";
import { links } from "@/constants";
import { Menu, Search, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsOpen(false);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen((p) => !p);
  });

  return (
    <>
      <nav
        className={`w-full sticky top-0 pb-4 bg-black/30 backdrop-blur-md z-50 ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center`}
      >
        <div className="max-w-7xl px-4 w-full items-center flex flex-row justify-between">
          <Link href={"/"}>
            <Image
              src={"/mrc-logo.png"}
              width={120}
              height={70}
              style={{ marginTop: 10 }}
              className="object-contain lg:w-36 md:w-32"
              alt="MRC_LOGO"
            />
          </Link>
          <div className="flex flex-row gap-x-4 justify-between items-center">
            <div className="md:flex flex-row items-center hidden gap-x-10 justify-baseline">
              {links.map((link, i) => (
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`uppercase ${
                    path == link.href ? "text-[#67E78B]" : "text-white"
                  } font-origintech lg:text-base text-sm hover:text-[#67E78B] font-semibold`}
                  key={i}
                  href={link.href}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <button
              onClick={handleOpen}
              title="menu"
              className="md:hidden block"
            >
              <Menu className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed left-0 top-0 w-full h-full
    flex justify-center items-center 
    bg-gradient-to-b from-[#2B2C32] to-[#000000] 
    transition-all z-30 duration-1000 
    ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-full pointer-events-none"
    }`}
      >
        <div className="max-w-7xl h-full w-full px-4 flex flex-col justify-center items-center relative transition-all duration-1000">
          <button
            onClick={handleOpen}
            className="absolute text-white right-8 bottom-8"
          >
            <XIcon className="w-7 h-7 text-white" />
          </button>
          <div className="flex flex-col space-y-4">
            {links.map((link, i) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`uppercase ${
                  path === link.href ? "text-[#67E78B]" : "text-white"
                } font-origintech md:text-sm text-lg font-semibold transition-colors duration-300`}
                key={i}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
