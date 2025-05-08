import { useEffect, useState } from "react";
import { Section } from "../../commons/structure/Section";
import organizationContent from "../../../assets/content/organization";
import {
  Container,
  Content,
  LabelGroup,
  DirectorWrapper,
  DirectorLogo,
} from "./styles";

const pluralize = (word: string, sufix: string, count: number) =>
  count > 1 ? `${word}${sufix}` : word;

const groupLabels = {
  realizators: "Realizador",
  organizers: "Organizador",
} as const;

export default function Directors() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Section
      title="Realização"
      currentSectionId="Organization"
      nextSectionId="Programming"
    >
      <Container>
        {(["realizators", "organizers"] as const).map((group) => {
          const directors = organizationContent[group];
          if (!directors.length) return null;
          return (
            <Content key={group}>
              <DirectorWrapper>
                {directors.map((director, index) => (
                  <DirectorLogo
                    key={index}
                    src={
                      isMobile && director.mobileLogoPath
                        ? director.mobileLogoPath
                        : director.logoPath
                    }
                    alt={`Logo da organização ${director.name}`}
                    width={director.width}
                    onClick={() => handleRedirectOnClick(director.link)}
                  />
                ))}
              </DirectorWrapper>
              <LabelGroup>
                {pluralize(groupLabels[group], "es", directors.length)}
              </LabelGroup>
            </Content>
          );
        })}
      </Container>
    </Section>
  );
}
