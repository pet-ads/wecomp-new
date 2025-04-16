import ArrowButton from "../../ui/ArrowButton";

import heroContent from "../../../assets/content/hero";

import { EventDate, HighlightedText, EventLogo } from "./styles";
import { Section } from "../../Section";

export default function HeroBanner() {
  return (
    <Section sectionId="Hero">
      <EventLogo
        src={heroContent.logoPath}
        alt={heroContent.logoAlternativeText}
      />
      <EventDate>
        <HighlightedText>{heroContent.eventEdition}</HighlightedText>
        {heroContent.eventDate}
      </EventDate>
      <ArrowButton sectionId="About" />
    </Section>
  );
}
