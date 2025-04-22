import { Section } from "../../commons/structure/Section";
import Local from "./subcomponents/Local";
import locationContent from "../../../assets/content/location";

import { Container } from "./styles";

export default function Locations() {
  return (
    <Section
      title="Locais do evento"
      currentSectionId="Locations"
      nextSectionId="Contact"
    >
      <Container>
        {locationContent.map((local, index) => (
          <Local
            key={index}
            url={local.url}
            alt={`Imagem do local ${local.name}`}
            address={local.address}
            name={local.name}
          />
        ))}
      </Container>
    </Section>
  );
}
