"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      // Animation duration in milliseconds
      duration: 500,

      

      // Reduced offset to trigger animations sooner
      offset: 50,

     

      

      

      // Animation start event
      startEvent: "DOMContentLoaded",

      // Class applied on animation
      animatedClassName: "aos-animate",

      // Class for the elements before they are animated
      initClassName: "aos-init",

      // Throttle delay on scroll (ms)
      throttleDelay: 99,

      // Debounce delay on scroll (ms)
      debounceDelay: 50,

      // Add mirror option to help with route changes
      mirror: false,
    });
  }, []);

  // Handle route changes - this is the key fix
  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      AOS.refresh();

      // Force trigger animations for elements already in viewport
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight;

        if (isInViewport) {
          element.classList.add("aos-animate");
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
