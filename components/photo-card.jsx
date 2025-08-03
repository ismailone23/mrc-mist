import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function PhotoCard({ para, title, imgSrc, btn, ...rest }) {
  return (
    <div
      {...rest}
      className="flex hover:scale-105 justify-between items-start overflow-hidden transition-all duration-500 flex-col gap-2 w-full"
    >
      <div className="w-full h-52 overflow-hidden">
        <Image
          alt="mars_rover"
          className="rounded-tr-xl"
          src={imgSrc}
          width={500}
          height={500}
        />
      </div>
      <h1 className="text-white font-bold">{title}</h1>
      <p className="text-white text-sm">{para}</p>
      <button className="text-black cursor-pointer font-semibold px-4 py-2 rounded justify-center bg-[#67E78B] flex gap-2 items-center">
        {btn}
        <MoveRight className="text-black w-5" />
      </button>
    </div>
  );
}
