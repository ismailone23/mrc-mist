"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      // Animation duration in milliseconds
      duration: 1000,

      // Whether animation should happen only once - while scrolling down
      once: true,

      // Offset (in px) from the original trigger point
      offset: 120,

      // Easing function for animations
      easing: "ease-out-cubic",

      // Delay between each animated element (good for staggered effects)
      delay: 0,

      // Disable animations on mobile devices (optional)
      disable: function () {
        // Disable on mobile devices with screen width < 768px
        return window.innerWidth < 768;
      },

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
    });

    // Refresh AOS on route changes (important for SPA behavior)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Listen for route changes if using Next.js router
    window.addEventListener("popstate", handleRouteChange);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
