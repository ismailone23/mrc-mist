import Image from "next/image";

export default function EventCard({
  title = "",
  para = "",
  imageSrc = "",
  i = 1,
}) {
  return (
    <div
      className={`flex rounded-tr-xl pb-2 rounded-bl-xl overflow-hidden hover:scale-105 transition-all duration-300 flex-col bg-black sm:max-w-80 w-full gap-2`}
    >
    <div className="relative w-full sm:h-48 h-52 overflow-hidden">
     
      <Image
        alt="event-card-image"
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      
      <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300">
       
        <h2 className="title-font text-lg font-medium text-white mb-3">{title}</h2>
         </div>
    </div>
      <div className="px-2 pb-2 gap-y-1 flex flex-col">
        <h1 className="font-semibold text-white hover:underline transition-all duration-700 mb-1 text-lg line-clamp-2 text-ellipsis">
          {title}
        </h1>
        <p className="font-base text-white text-sm line-clamp-3 text-ellipsis">
          {para}
        </p>
      </div>
    </div>
  );
}
