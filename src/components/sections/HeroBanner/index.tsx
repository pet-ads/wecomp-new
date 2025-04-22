import heroContent from "../../../assets/content/hero";

import { EventDate, HighlightedText, EventLogo, Container } from "./styles";
import { Section } from "../../commons/structure/Section";

export default function HeroBanner() {
  return (
    <Section
      currentSectionId="Hero"
      nextSectionId="About"
      backgroundColor="var(--green-700)"
    >
      <Container>
        <EventLogo
          src={heroContent.logoPath}
          alt={heroContent.logoAlternativeText}
        />

        <EventDate>
          <HighlightedText>{heroContent.eventEdition}</HighlightedText>
          {heroContent.eventDate}
        </EventDate>
      </Container>
    </Section>
  );
}
