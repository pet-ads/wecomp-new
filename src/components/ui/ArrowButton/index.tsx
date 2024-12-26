// External library
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

// Types
import { ArrowScrool } from "../../../types/ArrowButtonScroll";

// Utils
import { handlePageScrollingOnClick } from "../../../utils/pageScrollingOnClick";

// Styles
import { ArrowContainerBox } from "./styles";


export default function ArrowButton({ sectionRef }: ArrowScrool) {

  return (
    <ArrowContainerBox onClick={() => handlePageScrollingOnClick({sectionRef})}
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
