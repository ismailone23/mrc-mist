"use client";
import { links } from "@/constants";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const path = usePathname();
  console.log(path);

  return (
    <nav className="w-full flex items-center justify-center">
      <div className="max-w-7xl w-full items-center flex flex-row justify-between">
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
        <div className="flex flex-row gap-x-4 justify-between">
          <div className="md:flex flex-row hidden gap-x-4 justify-baseline">
            {links.map((link, i) => (
              <Link
                className={`uppercase ${
                  path == link.href ? "text-[#67E78B]" : "text-white"
                } font-origintech text-sm font-semibold`}
                key={i}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <button>
            <Search className="w-5 h-5" />
          </button>
          <button className="md:hidden block">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}
