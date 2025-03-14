import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import ArrowButton from "../../ui/ArrowButton";
import Card from "./subcomponents/Card";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useContactSectionData from "../../../hooks/fetch/useContactSectionData";

import { ContactCards, ContactContainer, ContactContent } from "./styles";

export default function Contact() {
  const { sections } = useSectionRefs();
  const { socialMediaLinks } = useContactSectionData();

  return (
    <ContactContainer>
      <ContactContent ref={sections.Contact}>
        <SubTitle children="Informações de contato" />
        <Text
          textAlign="center"
          children="Nos acompanhe pelas nossas redes sociais, onde divulgaremos as atualizações do evento."
        />
        <ContactCards>
          {socialMediaLinks.map((media) => (
            <Card
              key={media.id}
              id={""}
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
