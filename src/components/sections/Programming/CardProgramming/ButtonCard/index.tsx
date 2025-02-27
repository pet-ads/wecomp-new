// Types
import { ProgrammingProps } from "../../../../../types/Programming";

// Styles
import { FooterContainer, VacanciesContainer } from "./styles";

import StrongParagraph from "../../../../ui/StrongParagraph";

export default function ButtonCard(props: ProgrammingProps) {
  const { vacancies } = props;

  return (
    <FooterContainer>
      <VacanciesContainer>
        <StrongParagraph>Vagas:</StrongParagraph> {vacancies}
      </VacanciesContainer>
    </FooterContainer>
  );
}
