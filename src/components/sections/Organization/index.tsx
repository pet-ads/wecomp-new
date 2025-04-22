import { Section } from "../../commons/structure/Section";
import organizationContent from "../../../assets/content/organization";

import { Container, DirectorLogo } from "./styles";

export default function Directors() {
  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Section
      title="Realizadores"
      currentSectionId="Organization"
      nextSectionId="Programming"
    >
      <Container>
        {organizationContent.map((director, index) => (
          <DirectorLogo
            key={index}
            src={director.logoPath}
            alt={`Logo da organização ${director.name}`}
            width={director.width}
            onClick={() => handleRedirectOnClick(director.link)}
          />
        ))}
      </Container>
    </Section>
  );
}
