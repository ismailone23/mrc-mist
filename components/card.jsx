import { ChevronRight, Package } from "lucide-react";
import Link from "next/link";

export default function Card({
  para = "",
  heading = "",
  btn = "",
  link = "#",
}) {
  return (
    <div className="flex flex-col">
      <Package className="h-8 w-8" />
      <div className="flex flex-col py-2 gap-y-2">
        <h1 className="font-semibold">{heading}</h1>
        <p className="text-sm">{para}</p>
        <Link
          href={link}
          className="flex justify-center py-2 bg-[#67E78B] hover: w-28 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
        >
          <span>{btn}</span>
          <ChevronRight className="w-5 h-5 text-black" />
        </Link>
      </div>
    </div>
  );
}
