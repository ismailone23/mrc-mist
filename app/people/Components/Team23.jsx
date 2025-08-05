import Image from "next/image";
import React from "react";
const teamMembers = [
  {
    name: "Tanvir",
    role: "Club President",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: "Fahim Al Faruk",
    role: "Club President",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: "Sanjid Jubaer Drubo",
    role: "General Secretary ",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: ".........",
    role: "Vice President of Online",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: "..........",
    role: "Vice President of Project",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: "........",
    role: "Vice President of Design",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: "...........",
    role: "Vice President of Technical",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
  {
    name: ".........",
    role: "Treasurer",
    img: "/dummy.png",
    description: "...................................",
    linkedin: "https://linkedin.com/",
    dribbble: "https://dribbble.com",
    x: "https://x.com/",
  },
];

const Team23 = () => {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-12"
          data-aos="fade-up"
        >
          Presidential Panel 2023-24
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 space-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className=" w-full " data-aos="fade-up">
              <div className="h-full flex flex-col items-center text-center  p-2 ">
                <Image
                  width={200}
                  height={200}
                  alt={member.name}
                  className="w-full h-64 mb-4 object-cover object-center "
                  src={member.img}
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-base ">{member.role}</p>
                <p className="mt-2  text-sm text-center">
                  {member.description}
                </p>
                <span className="inline-flex mt-4 space-x-4 text-xl ">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-linkedin hover:scale-125 transition-all hover:text-blue-500 transform-3d"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <a href={member.x} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-twitter-x hover:scale-125 transition-all hover:text-gray-800"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
                  <a
                    href={member.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-dribbble hover:scale-125 transition-all hover:text-red-400 "
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team23;
