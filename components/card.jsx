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
        <Icon className="h-10 w-10" />
        <h1 className="font-semibold text-lg">{heading}</h1>
      </div>
      <div className="flex flex-col py-2 gap-y-2">
        <p className="text-sm my-2">{para}</p>
        <Link
          href={link}
          className="flex rounded-tl-xl rounded-br-xl group justify-center py-2 bg-[#67E78B] hover: w-28 text-sm hover:underline transition-all duration-500 text-black font-origintech items-center"
        >
          <span>{btn}</span>
          <ChevronRight className="w-5 h-5 group-hover:ml-1 transition-all text-black" />
        </Link>
      </div>
    </div>
  );
}
