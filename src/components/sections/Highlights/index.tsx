// Components
import SubTitle from "../../ui/SubTitle";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import { HighlightsCardContainer, HighlightsContainer, HighlightsContent } from "./styles";

export default function Highlights() {
  const { sections } = useSectionRefs();

  return (
    <HighlightsContainer>
      <HighlightsContent ref={sections.Highlights}>
        <SubTitle children="Destaques" />
        <HighlightsCardContainer>
          Carrossel of highlights cards
        </HighlightsCardContainer>
      </HighlightsContent>
    </HighlightsContainer>
  );
}
