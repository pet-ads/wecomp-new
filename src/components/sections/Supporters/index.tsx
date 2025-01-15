// Components
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import {
  SupporterLogo,
  SupportesContainer,
  SupportesContent,
  SupportesLogoContainer,
} from "./styles";

export default function Supporters() {
  const { sections } = useSectionRefs();
  return (
    <SupportesContainer>
      <SupportesContent ref={sections.supporters}>
        <SubTitle children="Patrocinadores" />
        <SupportesLogoContainer>
          <SupporterLogo
            src="images/CompassUol.svg"
            alt="Compass Uol"
            aria-label="Compass Uol Logo"
          />
        </SupportesLogoContainer>
      </SupportesContent>
      <ArrowButton sectionRef={sections.programming} />
    </SupportesContainer>
  );
}
