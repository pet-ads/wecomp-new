import RedirectButton from "../../../../commons/toolkit/RedirectButton";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";

import { CardFooterProps } from "./types";

import { Container, ContainerButtons, EventDescriptionButton } from "./styles";
import { useEffect, useState } from "react";

export default function CardFooter({
  vacancies,
  link,
  labelButton,
  typeEvent,
  handleChangeCardText,
}: CardFooterProps) {
  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];

  const cutoffDate = new Date("2025-09-14T16:55:00");
  const [isAfterCutoff, setIsAfterCutoff] = useState(new Date() >= cutoffDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= cutoffDate) {
        setIsAfterCutoff(true);
        clearInterval(interval); 
      }
    }, 1000 * 30); 

    return () => clearInterval(interval);
  }, []);


  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />
      <ContainerButtons>
        {eventsDisablingActionButton.includes(typeEvent) ? null : (
          <EventDescriptionButton onClick={handleChangeCardText}>
            {labelButton}
          </EventDescriptionButton>
        )}
        {isAfterCutoff && link && (
          <RedirectButton link={link}>
            Inscrever-se
          </RedirectButton>
        )}
      </ContainerButtons>
    </Container>
  );
}
