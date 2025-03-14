import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/useSectionRefs";

import {
  EditionsCardContainer,
  EditionsContainer,
  EditionsContent,
} from "./styles";

export default function Editions() {
  const { sections } = useSectionRefs();

  return (
    <EditionsContainer>
      <EditionsContent ref={sections.Editions}>
        <SubTitle children="Edições anteriores" />
        <EditionsCardContainer>
          Carrossel of Editions cards
        </EditionsCardContainer>
        <ArrowButton sectionRef={sections.FAQs} />
      </EditionsContent>
    </EditionsContainer>
  );
}
