import { ArrowScrool } from "../../../types/ArrowButtonScroll";

import { handlePageScrollingOnClick } from "../../../utils/pageScrollingOnClick";

import { ArrowContainerBox, WrapperIcon } from "./styles";

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
