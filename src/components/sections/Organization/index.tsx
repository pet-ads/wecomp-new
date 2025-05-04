import { Section } from "../../commons/structure/Section";
import organizationContent from "../../../assets/content/organization";
import { Container, DirectorLogo, GroupsContainer, Content } from "./styles";

const pluralize = (word: string, sufix: string, count: number) =>
  count > 1 ? `${word}${sufix}` : word;

const groupLabels = {
  realizators: "Realizador",
  organizers: "Organizador",
} as const;

export default function Directors() {
  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Section
      title="Realização"
      currentSectionId="Organization"
      nextSectionId="Programming"
    >
      <GroupsContainer>
        {(["realizators", "organizers"] as const).map((group) => {
          const directors = organizationContent[group];
          if (!directors.length) return null;
          return (
            <Container key={group}>
              <h2>{pluralize(groupLabels[group], "es", directors.length)}</h2>
              <Content>
                {directors.map((director, index) => (
                  <DirectorLogo
                    key={index}
                    src={director.logoPath}
                    alt={`Logo da organização ${director.name}`}
                    width={director.width}
                    onClick={() => handleRedirectOnClick(director.link)}
                  />
                ))}
              </Content>
            </Container>
          );
        })}
      </GroupsContainer>
    </Section>
  );
}
