// Components
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchHeroSection from "../../../hooks/useFetchHeroSection";

// Styles
import { LogoContainer, EventDate, HighlightedText, EventLogo } from "./styles";

export default function HeroBanner() {
  const { sections } = useSectionRefs();
  const { eventDate, eventEdition, logoAlternativeText, logoPath } =
    useFetchHeroSection();

  return (
    <LogoContainer ref={sections.HeroBanner}>
      <EventLogo src={logoPath} alt={logoAlternativeText} />
      <EventDate>
        <HighlightedText>{eventEdition}</HighlightedText>
        {eventDate}
      </EventDate>
      <ArrowButton sectionRef={sections.prologue} />
    </LogoContainer>
  );
}
