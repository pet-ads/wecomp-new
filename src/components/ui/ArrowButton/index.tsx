// External library
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

// Types
import { ArrowScrool } from "../../../types/ArrowButtonScroll";

// Styles
import { ArrowContainerBox } from "./styles";

export default function ArrowButton({ sectionRef }: ArrowScrool) {

  const handlePageScrollingOnClick = () => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <ArrowContainerBox onClick={handlePageScrollingOnClick}
      as={motion.div}
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <IoIosArrowDown size={24} color="black" />
    </ArrowContainerBox>
  );
}
