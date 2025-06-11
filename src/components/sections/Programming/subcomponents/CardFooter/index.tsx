import RedirectButton from "../../../../commons/toolkit/RedirectButton";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";

import { CardFooterProps } from "./types";

import { Container, ContainerButtons, EventDescriptionButton } from "./styles";

export default function CardFooter({
  vacancies,
  link,
  labelButton,
  typeEvent,
  handleChangeCardText,
}: CardFooterProps) {
  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];

  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />
      <ContainerButtons>
        {eventsDisablingActionButton.includes(typeEvent) ? null : (
          <EventDescriptionButton onClick={handleChangeCardText}>
            {labelButton}
          </EventDescriptionButton>
        )}
        <RedirectButton children="Inscrever-se" link={link} />
      </ContainerButtons>
    </Container>
  );
}
