import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import Card from "./subcomponents/Card";

import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchContactSection from "../../../hooks/useFetchContactSection";

import { ContactCards, ContactContainer, ContactContent } from "./styles";

export default function Contact() {
  const { sections } = useSectionRefs();
  const { socialMediaLinks } = useFetchContactSection();

  return (
    <ContactContainer>
      <ContactContent ref={sections.Contact}>
        <SubTitle children="Informações de contato" />
        <Text textAlign="center" children="Nos acompanhe pelas nossas redes sociais, onde divulgaremos as atualizações do evento." />
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
    </ContactContainer>
  );
}
