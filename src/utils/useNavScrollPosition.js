import { useEffect, useState } from "react";

const useNavScrollPosition = () => {
  const [isNavBgWhite, setIsNavBgWhite] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > 100) {
        setIsNavBgWhite(true);
      } else {
        setIsNavBgWhite(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [isNavBgWhite];
};

export default useNavScrollPosition;
