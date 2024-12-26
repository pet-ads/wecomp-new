// Components
import SubTitle from "../../ui/SubTitle";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import { ProgrammingCardContainer, ProgrammingContainer, ProgrammingContent } from "./styles";

export default function Programming() {
  const { sections } = useSectionRefs();

  return (
    <ProgrammingContainer>
      <ProgrammingContent ref={sections.programming}>
        <SubTitle children="Programação" />
        <ProgrammingCardContainer>Carrossel of cards</ProgrammingCardContainer>
      </ProgrammingContent>
    </ProgrammingContainer>
  );
}
