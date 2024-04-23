import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";

const ScrollBtn = ({ cardRef, scrollContainerRef, isImgBtn }) => {
  const [cardWidth, setCardWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        setCardWidth(width);
      }
    };

    updateCardWidth();

    const handleResize = () => {
      updateCardWidth();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newScrollPosition = container.scrollLeft - cardWidth;
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const newScrollPosition = container.scrollLeft + cardWidth;
      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setScrollPosition(newScrollPosition);
    }
  };
  return (
    <>
      {!isImgBtn ? (
        <div className="scroll_btn">
          <FaArrowLeftLong
            className={"scroll_icon scroll-left"}
            onClick={scrollLeft}
          />
          <FaArrowRightLong
            className="scroll_icon scroll-right"
            onClick={scrollRight}
          />
        </div>
      ) : (
        <div className="scroll_btn_round">
          <div>
            <GrPrevious onClick={scrollLeft} />
          </div>
          <div>
            <GrNext onClick={scrollRight} />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollBtn;
