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
          className="rounded-tr-xl h-64 object-center object-cover"
          src={imgSrc}
          width={500}
          height={500}
        />
      </div>
      <h1 className="text-white text-lg mb-3 font-bold">{title}</h1>
      <p className="text-white mb-2">{para}</p>
      <button className="text-black group cursor-pointer font-semibold px-4 py-2 rounded justify-center bg-[#67E78B] flex gap-2 items-center">
        {btn}
        <MoveRight className="text-black group-hover:ml-1 transition-all w-6" />
      </button>
    </div>
  );
}
