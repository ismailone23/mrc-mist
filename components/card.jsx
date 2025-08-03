import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Card({
  para = "",
  heading = "",
  btn = "",
  link = "#",
  Icon,
  ...rest
}) {
  return (
    <div {...rest} className="flex flex-col">
      <div className="flex flex-row items-start w-full gap-4">
        <Icon className="h-8 w-8" />
        <h1 className="font-semibold">{heading}</h1>
      </div>
      <div className="flex flex-col py-2 gap-y-2">
        <p className="text-sm">{para}</p>
        <Link
          href={link}
          className="flex rounded-tl-xl rounded-br-xl justify-center py-2 bg-[#67E78B] hover: w-28 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
        >
          <span>{btn}</span>
          <ChevronRight className="w-5 h-5 text-black" />
        </Link>
      </div>
    </div>
  );
}
