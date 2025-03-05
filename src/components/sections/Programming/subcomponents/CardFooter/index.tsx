// Component
import LabeledValue from "../../../../ui/LabeledValue";
import RedirectButton from "../../../../ui/RedirectButton";

// Styles
import { Container, ContainerButtons, EventDescriptionButton } from "./styles";

// Types
import { CardFooterProps } from "../../../../../types/Programming";

export default function CardFooter({
  vacancies,
  link,
  labelButton,
  handleChangeCardText,
}: CardFooterProps) {
  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />
      <ContainerButtons>
        <EventDescriptionButton onClick={handleChangeCardText}>
          {labelButton}
        </EventDescriptionButton>
        <RedirectButton children="Inscrever-se" link={link} />
      </ContainerButtons>
    </Container>
  );
}
