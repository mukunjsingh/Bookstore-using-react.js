// FilterSection.jsx
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaChevronUp } from "react-icons/fa";

const FilterSection = ({ title, children }) => {
  const contentRef = useRef(null);
  const tl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    tl.current = gsap.timeline({ paused: true });
    tl.current.to(contentRef.current, {
      height: "10vw",
      duration: 0.3,
      ease: "power1.out",
    });
    if(!isOpen){
      gsap.set(contentRef.current,{height:"0vw"});
    }
  }, []);

  const toggle = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-[2vw] mt-[1.6vw]">
      <h3 className="text-white border-1 px-[1vw] py-[0.7vw] flex justify-between rounded-[0.5vw]">
        Filter by {title}
        <div className="cursor-pointer " onClick={toggle}>
          <FaChevronUp
            className={`h-[1vw] transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </h3>

      <div
        ref={contentRef}
        className="border-l-1 border-r-1 border-b-[1vw] text-white h-[10vw] rounded-[0.4vw] overflow-y-auto no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
