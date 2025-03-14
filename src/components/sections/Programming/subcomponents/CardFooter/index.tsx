import LabeledValue from "../../../../ui/LabeledValue";
import RedirectButton from "../../../../ui/RedirectButton";

import { Container, ContainerButtons, EventDescriptionButton } from "./styles";

import { CardFooterProps } from "../../types";

export default function CardFooter({
  vacancies,
  link,
  labelButton,
  typeEvent,
  handleChangeCardText,
}: CardFooterProps) {
  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />
      <ContainerButtons>
        {typeEvent == "TechnicalVisit" ? null : (
          <EventDescriptionButton onClick={handleChangeCardText}>
            {labelButton}
          </EventDescriptionButton>
        )}
        <RedirectButton children="Inscrever-se" link={link} />
      </ContainerButtons>
    </Container>
  );
}
