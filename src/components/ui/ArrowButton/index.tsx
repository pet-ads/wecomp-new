// External library
import { IoIosArrowDown } from "react-icons/io";

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
        inline: "center"
      });
    }
  };

  return (
    <ArrowContainerBox onClick={handlePageScrollingOnClick}>
      <IoIosArrowDown size={24} color="black" />
    </ArrowContainerBox>
  );
}
