"use client";
import { useEffect, useState } from "react";

export default function FloatingCrosses({ count = 4, interval = 3000 }) {
  const [crosses, setCrosses] = useState([]);

  const generateCrosses = () => {
    return Array.from({ length: count }, (_, i) => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: i * 200,
    }));
  };

  useEffect(() => {
    setCrosses(generateCrosses());

    const intervalId = setInterval(() => {
      setCrosses(generateCrosses());
    }, interval);

    return () => clearInterval(intervalId);
  }, [count, interval]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {crosses.map((cross, index) => (
        <div
          key={cross.id}
          data-aos="fade-in"
          data-aos-delay={cross.delay}
          data-aos-duration="1500"
          className="absolute text-white/20 text-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-45"
          style={{
            left: `${cross.x}%`,
            top: `${cross.y}%`,
            animation: `float ${interval}ms ease-in-out infinite`,
            animationDelay: `${cross.delay}ms`,
            color: "#67E78B",
          }}
        >
          +
        </div>
      ))}
    </div>
  );
}
