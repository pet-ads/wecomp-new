// Components
import SubTitle from "../../ui/SubTitle";

// Styles
import { ProgrammingCardContainer, ProgrammingContainer, ProgrammingContent } from "./styles";

export default function Programming() {
  return (
    <ProgrammingContainer>
      <ProgrammingContent>
        <SubTitle>Programação</SubTitle>
        <ProgrammingCardContainer>
          Carrossel of cards
        </ProgrammingCardContainer>
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
