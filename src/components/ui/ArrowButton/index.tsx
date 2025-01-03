// Types
import { ArrowScrool } from "../../../types/ArrowButtonScroll";

// Utils
import { handlePageScrollingOnClick } from "../../../utils/pageScrollingOnClick";

// Styles
import { ArrowContainerBox, WrapperIcon } from "./styles";

// Animations
import { LEVITATION } from "../../../animations/levitation";

export default function ArrowButton({ sectionRef }: ArrowScrool) {
  return (
    <ArrowContainerBox
      onClick={() => handlePageScrollingOnClick({ sectionRef })}
      {...LEVITATION}
    >
      <WrapperIcon />
    </ArrowContainerBox>
  );
}
