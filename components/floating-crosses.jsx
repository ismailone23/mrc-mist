"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FloatingCrosses({ count = 5, interval = 3000 }) {
  const [positions, setPositions] = useState([]);

  const generatePositions = () =>
    Array.from({ length: count }).map(() => ({
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      id: Math.random(),
    }));

  useEffect(() => {
    setPositions(generatePositions());
    const timer = setInterval(() => {
      setPositions(generatePositions());
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval]);

  return (
    <>
      {positions.map((pos) => (
        <div
          key={pos.id}
          className="absolute transition-all duration-1000 ease-in-out"
          style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
        >
          <Image
            src="/cross.png"
            width={30}
            height={30}
            alt="cross"
            className="object-contain opacity-0 animate-fadeInOut"
          />
        </div>
      ))}
    </>
  );
}
