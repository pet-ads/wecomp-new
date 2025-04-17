import useScrollToSection from "../../../../hooks/references/useScrollToSection";

import { ArrowScrool } from "./types";

import { ArrowContainerBox, WrapperIcon } from "./styles";

import { LEVITATION } from "../../../../animations";

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
