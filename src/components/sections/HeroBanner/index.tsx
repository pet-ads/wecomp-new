import useFetchHeroSection from "../../../hooks/useFetchHeroSection";
import { LogoContainer, EventDate, HighlightedText, EventLogo, ArrowDown } from "./styles";
import { useScrollToNext } from "../../../hooks/useScrollToNext";

export default function HeroBanner() {
  const { eventDate, eventEdition, logoAlternativeText, logoPath } =
    useFetchHeroSection();
  const { sectionRef, scrollToNextSection } = useScrollToNext();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="section">
      <LogoContainer>
        <EventLogo src={logoPath} alt={logoAlternativeText} />
        <EventDate>
          <HighlightedText>{eventEdition}</HighlightedText>
          {eventDate}
        </EventDate>
        <ArrowDown onClick={scrollToNextSection}>▼</ArrowDown>
      </LogoContainer>
    </section>
  );
}
