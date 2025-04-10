import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import heroContent from "../../../assets/content/hero";

import { LogoContainer, EventDate, HighlightedText, EventLogo } from "./styles";

export default function HeroBanner() {
  const { sections } = useSectionRefs();

  return (
    <LogoContainer ref={sections.HeroBanner}>
      <EventLogo
        src={heroContent.logoPath}
        alt={heroContent.logoAlternativeText}
      />
      <EventDate>
        <HighlightedText>{heroContent.eventEdition}</HighlightedText>
        {heroContent.eventDate}
      </EventDate>
      <ArrowButton sectionRef={sections.prologue} />
    </LogoContainer>
  );
}
