import { Section } from "../../commons/structure/Section";
import Card from "./subcomponents/Card";

import contactContent from "../../../assets/content/contact";

import { ContactCards, Container } from "./styles";

export default function Contact() {
  return (
    <Section
      title="Informações de contato"
      currentSectionId="Contact"
      nextSectionId="Editions"
    >
      <Container>
        <p>
          Nos acompanhe nas redes sociais, onde divulgaremos as atualizações do
          evento.
        </p>
        <ContactCards>
          {contactContent.map((media, index) => (
            <Card
              key={index}
              username={media.username}
              contactUrl={media.contactUrl}
              iconPath={media.iconPath}
              iconAlt={media.iconAlt}
            />
          ))}
        </ContactCards>
      </Container>
    </Section>
  );
}
