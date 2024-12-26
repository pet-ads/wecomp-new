// Components
import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import { Card, ContactCards, ContactContainer, ContactContent } from "./styles";

export default function Contact() {
  const { sections } = useSectionRefs();

    return (
      <ContactContainer>
        <ContactContent ref={sections.Contact}>
          <SubTitle children="Informações de contato" />
          <Text children="Nos acompanhe pelas nossas redes sociais, onde divulgaremos as atualizações do evento." />
          <ContactCards>
            <Card>Icon 1</Card>
            <Card>Icon 2</Card>
            <Card>Icon 3</Card>
          </ContactCards>
        </ContactContent>
      </ContactContainer>
    );
}