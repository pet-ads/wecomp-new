import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/useSectionRefs";

import {
  HighlightsCardContainer,
  HighlightsContainer,
  HighlightsContent,
} from "./styles";

export default function Highlights() {
  const { sections } = useSectionRefs();

  return (
    <HighlightsContainer>
      <HighlightsContent ref={sections.Highlights}>
        <SubTitle children="Destaques" />
        <HighlightsCardContainer>
          Carrossel of highlights cards
        </HighlightsCardContainer>
        <ArrowButton sectionRef={sections.Locations} />
      </HighlightsContent>
    </HighlightsContainer>
  );
}
