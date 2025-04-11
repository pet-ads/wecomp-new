import ArrowButton from "../../ui/ArrowButton";
import SubTitle from "../../ui/SubTitle";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import organizationContent from "../../../assets/content/organization";

import {
  DirectorContainer,
  DirectorContent,
  DirectorLogo,
  DirectorsLogoContainer,
} from "./styles";

export default function Directors() {
  const { sections } = useSectionRefs();

  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <DirectorContainer ref={sections.directors}>
      <DirectorContent>
        <SubTitle children="Realizadores" />
        <DirectorsLogoContainer>
          {organizationContent.map((director, index) => (
            <DirectorLogo
              key={index}
              src={director.logoPath}
              alt={`Logo da organização ${director.name}`}
              width={director.width}
              onClick={() => handleRedirectOnClick(director.link)}
            />
          ))}
        </DirectorsLogoContainer>
      </DirectorContent>
      <ArrowButton sectionRef={sections.programming} />
    </DirectorContainer>
  );
}
