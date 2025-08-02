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
    <nav className="w-full flex items-center justify-center">
      <div className="max-w-7xl px-4 w-full items-center flex flex-row justify-between">
        <Link href={"/"}>
          <Image
            src={"/mrc-logo.png"}
            width={150}
            height={70}
            style={{ marginTop: 10 }}
            className="object-contain lg:w-40 md:w-32"
            alt="MRC_LOGO"
          />
        </Link>
        <div className="flex flex-row gap-x-4 justify-between items-center">
          <div className="md:flex flex-row hidden gap-x-4 justify-baseline">
            {links.map((link, i) => (
              <Link
                onClick={() => setIsOpen(false)}
                className={`uppercase ${
                  path == link.href ? "text-[#67E78B]" : "text-white"
                } font-origintech text-sm hover:text-[#67E78B] font-semibold`}
                key={i}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <button>
            <Search className="w-5 h-5 hover:text-[#67E78B]" />
          </button>
          <button onClick={handleOpen} className="md:hidden block">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 w-full h-full z-10 
    flex justify-center items-center 
    bg-gradient-to-b from-[#2B2C32] to-[#000000] 
    transition-all duration-1000 
    ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-full pointer-events-none"
    }`}
      >
        <div className="max-w-7xl h-full w-full px-4 flex flex-col justify-center items-center relative transition-all duration-1000">
          <button onClick={handleOpen} className="absolute right-5 bottom-5">
            <XIcon />
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
    </nav>
  );
}
