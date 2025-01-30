// Components
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";



// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchSupporters from "../../../hooks/useFetchSupportersSection";

// Styles
import {
  SupporterLogo,
  SupportesContainer,
  SupportesContent,
  SupportesLogoContainer,
  MarqueeContainer,
  MarqueeItem

} from "./styles";


export default function Supporters() {
  const { sections } = useSectionRefs();
  const { eventSupporters } = useFetchSupporters();
  return (
    <SupportesContainer>
      <SupportesContent ref={sections.supporters}>
        <SubTitle children="Patrocinadores" />

        <SupportesLogoContainer>
          <MarqueeContainer>
            <MarqueeItem>
              {eventSupporters.map((supporter) => (
                <SupporterLogo key={supporter.id} src={supporter.logoPath} alt={supporter.logoAlternativeText} />
              ))}
              
              {eventSupporters.map((supporter) => (
                <SupporterLogo key={supporter.id} src={supporter.logoPath} alt={supporter.logoAlternativeText} />
              ))}
            </MarqueeItem>
          </MarqueeContainer>
        </SupportesLogoContainer>
        
        
      </SupportesContent>
      <ArrowButton sectionRef={sections.programming} />
    </SupportesContainer>
  );
}
