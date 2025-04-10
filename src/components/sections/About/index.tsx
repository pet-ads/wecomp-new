import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import aboutContent from "../../../assets/content/about";

import { PrologueSection, PrologueWrapper, PrologueText } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();

  return (
    <PrologueSection>
      <PrologueWrapper ref={sections.prologue}>
        <SubTitle children={aboutContent.title} />
        <PrologueText>{aboutContent.description}</PrologueText>
      </PrologueWrapper>
      <ArrowButton sectionRef={sections.supporters} />
    </PrologueSection>
  );
}
