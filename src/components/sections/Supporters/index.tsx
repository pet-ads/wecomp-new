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
          <SupporterLogo
            src="images/F1RST.svg"
            alt="F1RST"
            aria-label="F1RST Logo"
          />
          <SupporterLogo
            src="images/Marlabs.svg"
            alt="Marlabs"
            aria-label="Marlabs Logo"
          />
          <SupporterLogo
            src="images/Softable.svg"
            alt="Softable"
            aria-label="Softable Logo"
          />
          <SupporterLogo
            src="images/Xmobots.svg"
            alt="Xmobots"
            aria-label="Xmobots Logo"
          />
        </SupportesLogoContainer>
      </SupportesContent>
      <ArrowButton sectionRef={sections.programming} />
    </SupportesContainer>
  );
}
