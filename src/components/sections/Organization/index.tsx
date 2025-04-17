import { Section } from "../../commons/structure/Section";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";

import organizationContent from "../../../assets/content/organization";

import {
  DirectorContent,
  DirectorLogo,
  DirectorsLogoContainer,
} from "./styles";

export default function Directors() {
  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Section sectionId="Organization">
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
      <ArrowButton sectionId="Programming" />
    </Section>
  );
}
