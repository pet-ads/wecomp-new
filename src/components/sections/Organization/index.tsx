import { Section } from "../../commons/structure/Section";
import organizationContent from "../../../assets/content/organization";
import { Container, DirectorLogo, GroupsContainer, Content} from "./styles";

export default function Directors() {
  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  const realizadores = organizationContent.filter(org => org.type === "realizador");
  const organizadores = organizationContent.filter(org => org.type === "organizador");

  return (
    <Section
      title="Realização"
      currentSectionId="Organization"
      nextSectionId="Programming"
    >
      <GroupsContainer>
        <Container>
          <h2>Realizadores</h2>
          <Content>
            {realizadores.map((director, index) => (
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

        
        <Container>
          <h2>Organizadores</h2>
          {organizadores.map((director, index) => (
            <DirectorLogo
              key={index}
              src={director.logoPath}
              alt={`Logo da organização ${director.name}`}
              width={director.width}
              onClick={() => handleRedirectOnClick(director.link)}
            />
          ))}
        </Container>
      </GroupsContainer>
    </Section>
  );
}
