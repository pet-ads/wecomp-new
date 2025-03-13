import ArrowButton from "../../ui/ArrowButton";
import SubTitle from "../../ui/SubTitle";

import useSectionRefs from "../../../hooks/useSectionRefs";

import {
  DirectorContainer,
  DirectorContent,
  DirectorLogo,
  DirectorsLogoContainer,
  OrganizerContent,
  OrganizerLogo,
  OrganizerLogoContainer,
} from "./styles";
import useFetchDirectorsSection from "../../../hooks/useFetchDirectorsSection";

export default function Directors() {
  const { sections } = useSectionRefs();
  const data = useFetchDirectorsSection();

  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <DirectorContainer ref={sections.directors}>
      <DirectorContent>
        <SubTitle children="Realizadores" />
        <DirectorsLogoContainer>
          {data.map((director) => (
            <DirectorLogo
              key={director.id}
              src={director.logoPath}
              alt={director.logoAlternativeText}
              width={director.width}
              onClick={() => handleRedirectOnClick(director.link)}
            />
          ))}
        </DirectorsLogoContainer>
      </DirectorContent>

      <OrganizerContent>
        <SubTitle children="Organizadores" />
        <OrganizerLogoContainer>
          <OrganizerLogo
            src="../../../../public/images/empresaGenerica.svg"
            alt="Logo do PET ADS"
            onClick={() => handleRedirectOnClick("https://petads-ifsp-scl.vercel.app/")}
          />
        </OrganizerLogoContainer>
      </OrganizerContent>
      <ArrowButton sectionRef={sections.programming} />
    </DirectorContainer>
  );
}
