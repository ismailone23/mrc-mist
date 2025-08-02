import Image from "next/image";

export default function EventCard({
  title = "",
  para = "",
  imageSrc = "",
  i = 1,
}) {
  return (
    <div
      className={`flex rounded-md overflow-hidden hover:scale-105 transition-all duration-300 flex-col bg-zinc-900 sm:max-w-80 w-full gap-2`}
    >
      <div className="w-full sm:h-48 h-52">
        <Image
          alt="event-card-image"
          src={imageSrc}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-2 pb-2">
        <h1 className="font-roboto hover:underline transition-all duration-700 line-clamp-2 text-ellipsis">
          {title}
        </h1>
        <p className="font-roboto text-sm line-clamp-3 text-ellipsis">{para}</p>
      </div>
    </div>
  );
}
