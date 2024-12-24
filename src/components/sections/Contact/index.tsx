// Components
import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";

// Types
// import { Medias } from "../../../types/SocialMedia";

// Styles
import { Card, ContactCards, ContactContainer, ContactContent } from "./styles";

export default function Contact() {
    return (
      <ContactContainer>
        <ContactContent>
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