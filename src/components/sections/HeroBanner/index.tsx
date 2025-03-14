import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useHeroSectionData from "../../../hooks/fetch/useHeroSectionData";

import { LogoContainer, EventDate, HighlightedText, EventLogo } from "./styles";

export default function HeroBanner() {
  const { sections } = useSectionRefs();
  const { eventDate, eventEdition, logoAlternativeText, logoPath } =
    useHeroSectionData();

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
