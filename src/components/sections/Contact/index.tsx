import { Section } from "../../commons/structure/Section";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";
import Text from "../../commons/toolkit/Text";
import Card from "./subcomponents/Card";

import contactContent from "../../../assets/content/contact";

import { ContactCards, ContactContent } from "./styles";

export default function Contact() {
  return (
    <Section sectionId="Contact">
      <ContactContent>
        <SubTitle children="Informações de contato" />
        <Text
          textAlign="center"
          children="Nos acompanhe pelas nossas redes sociais, onde divulgaremos as atualizações do evento."
        />
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
        <ArrowButton sectionId="Editions" />
      </ContactContent>
    </Section>
  );
}
