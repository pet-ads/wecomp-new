import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";
import Card from "./subcomponents/Card";

import useSectionRefs from "../../hooks/references/useSectionRefs";
import useContactSectionData from "../../hooks/fetch/useContactSectionData";

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
    </ContactContainer>
  );
}
