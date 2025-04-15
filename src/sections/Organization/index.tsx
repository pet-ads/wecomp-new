<<<<<<<< HEAD:src/sections/Organization/index.tsx
import { Section } from "../../Section";
import ArrowButton from "../../ui/ArrowButton";
import SubTitle from "../../ui/SubTitle";

import organizationContent from "../../../assets/content/organization";
========
import SubTitle from "../../components/ui/SubTitle";

import useSectionRefs from "../../hooks/references/useSectionRefs";
>>>>>>>> development:src/sections/Directors/index.tsx

import {
  DirectorContent,
  DirectorLogo,
  DirectorsLogoContainer,
} from "./styles";
<<<<<<<< HEAD:src/sections/Organization/index.tsx
========
import useDirectorsSectionData from "../../hooks/fetch/useDirectorsSectionData";
>>>>>>>> development:src/sections/Directors/index.tsx

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
<<<<<<<< HEAD:src/sections/Organization/index.tsx
      <ArrowButton sectionId="Programming" />
    </Section>
========
    </DirectorContainer>
>>>>>>>> development:src/sections/Directors/index.tsx
  );
}
