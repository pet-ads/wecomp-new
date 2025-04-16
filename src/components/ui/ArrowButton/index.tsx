import { ArrowScrool } from "./types";

// import { handlePageScrollingOnClick } from "../../../utils/pageScrollingOnClick";

import { ArrowContainerBox, WrapperIcon } from "./styles";

import { LEVITATION } from "../../../animations/levitation";
import useScrollToSection from "../../../hooks/references/useScrollToSection";

export default function ArrowButton({ sectionId }: ArrowScrool) {
  const smoothScrollToTarget = useScrollToSection();

  return (
    <ArrowContainerBox
      onClick={() => smoothScrollToTarget(sectionId)}
      {...LEVITATION}
    >
      <WrapperIcon />
    </ArrowContainerBox>
  );
}
