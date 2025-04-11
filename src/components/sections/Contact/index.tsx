import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import ArrowButton from "../../ui/ArrowButton";
import Card from "./subcomponents/Card";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import contactContent from "../../../assets/content/contact";

import { ContactCards, ContactContainer, ContactContent } from "./styles";

export default function Contact() {
  const { sections } = useSectionRefs();

  return (
    <ContactContainer>
      <ContactContent ref={sections.Contact}>
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
      </ContactContent>
      <ArrowButton sectionRef={sections.Editions} />
    </ContactContainer>
  );
}
