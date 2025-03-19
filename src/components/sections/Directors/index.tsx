import SubTitle from "../../ui/SubTitle";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import {
  DirectorContainer,
  DirectorContent,
  DirectorLogo,
  DirectorsLogoContainer,
} from "./styles";
import useDirectorsSectionData from "../../../hooks/fetch/useDirectorsSectionData";

export default function Directors() {
  const { sections } = useSectionRefs();
  const data = useDirectorsSectionData();

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
    </DirectorContainer>
  );
}
