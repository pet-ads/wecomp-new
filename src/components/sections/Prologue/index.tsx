import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import usePrologueSectionData from "../../../hooks/fetch/usePrologueSectionData";

import { PrologueSection, PrologueWrapper, PrologueText } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();
  const { description, sectionLabel } = usePrologueSectionData();

  return (
    <PrologueSection>
      <PrologueWrapper ref={sections.prologue}>
        <SubTitle children={sectionLabel} />
        <PrologueText>{description}</PrologueText>
      </PrologueWrapper>
      <ArrowButton sectionRef={sections.supporters} />
    </PrologueSection>
  );
}
