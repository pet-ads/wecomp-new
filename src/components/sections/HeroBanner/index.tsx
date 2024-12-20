// Components
import useSectionRefs from "../../../hooks/useSectionRefs";
import ArrowButton from "../../ui/ArrowButton";

// Styles
import { LogoContainer, EventDate, HighlightedText, EventLogo } from "./styles";

export default function HeroBanner() {
  const { sections } = useSectionRefs();

  return (
    <LogoContainer>
      <EventLogo src="images/wecompLogo.svg" alt="Logo de apresentação" />
      <EventDate>
        <HighlightedText>VI Semana da Computação</HighlightedText>
        Dia da semana da computação
      </EventDate>
      <ArrowButton sectionRef={sections.prologue} />
    </LogoContainer>
  );
}
