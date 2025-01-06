// Components
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchHeroSection from "../../../hooks/useFetchHeroSection";

// Styles
import { LogoContainer, EventDate, HighlightedText, EventLogo } from "./styles";

export default function HeroBanner() {
  const { sections } = useSectionRefs();
  const { heroInformation } = useFetchHeroSection();

  return (
    <LogoContainer ref={sections.HeroBanner}>
      <EventLogo
        src={heroInformation?.logoPath}
        alt={heroInformation?.logoAlternativeText}
      />
      <EventDate>
        <HighlightedText>
          {heroInformation?.eventEdition}
        </HighlightedText>
        {heroInformation?.eventDate}
      </EventDate>
      <ArrowButton sectionRef={sections.prologue} />
    </LogoContainer>
  );
}
