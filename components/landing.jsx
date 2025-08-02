import Image from "next/image";
import Navbar from "./nav";
import FloatingCrosses from "./floating-crosses";

export default function Landing() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#2B2C32] to-[#000000]">
      <div className="w-full flex flex-col h-full bg-[url(/pattern.png)]">
        <Navbar />
        <div className="w-full px-4 flex h-full justify-center items-center">
          <div className="max-w-7xl justify-between w-full md:grid md:grid-cols-2 flex flex-col items-center">
            <div className="flex relative justify-between items-center w-full">
              <div className="w-full justify-between h-full flex flex-col">
                <Image
                  src={"/loader.png"}
                  width={350}
                  height={33}
                  alt="hero_loader"
                  className="object-contain lg:w-72 w-52"
                />
                <div className="relative h-full justify-center flex flex-col">
                  <div className="flex gap-x-5 items-start">
                    <h1 className="lg:text-5xl text-4xl pb-4 font-origintech">
                      SOAR HIGH,
                    </h1>
                    <Image
                      src={"/color_plate.png"}
                      width={66}
                      height={22}
                      alt="hero_color_plates"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="lg:text-5xl text-4xl pb-4 font-origintech">
                    SKY IS THE LIMIT
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full relative items-end">
              <Image
                src={"/langing-image.png"}
                width={570}
                height={430}
                alt="hero_image"
                className="object-contain lg:w-xl md:w-lg w-full"
              />
            </div>
            <FloatingCrosses count={4} interval={3000} />
          </div>
        </div>
      </div>
    </div>
  );
}
