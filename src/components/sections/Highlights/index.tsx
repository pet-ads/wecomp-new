// Components
import SubTitle from "../../ui/SubTitle";

// Styles
import { HighlightsCardContainer, HighlightsContainer, HighlightsContent } from "./styles";

export default function Highlights() {
  return (
    <HighlightsContainer>
      <HighlightsContent>
        <SubTitle>Destaques</SubTitle>
        <HighlightsCardContainer>
          Carrossel of highlights cards
        </HighlightsCardContainer>
      </HighlightsContent>
    </HighlightsContainer>
  );
}
