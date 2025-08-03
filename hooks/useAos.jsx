import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      ...options, // Allow custom options
    });

    // Refresh AOS on route changes (optional)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // If using Next.js router
    // router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
};
