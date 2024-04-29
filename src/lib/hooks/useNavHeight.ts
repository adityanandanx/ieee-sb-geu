import { useState, useEffect } from "react";

export const useNavHeight = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector("header");
      if (header) {
        const height = header.offsetHeight;
        setNavHeight(height);
      }
    };

    // Initial calculation
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return navHeight;
};
