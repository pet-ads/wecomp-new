import { useState } from "react";

// Types
import { ProgrammingProps } from "../../../../../types/Programming";

import ButtonCard from "../ButtonCard";

import ButtonContainer from "../../../../../styles/ButtonContainer";

import {
  DescriptionContainer,
  Description,
  Container,
  ButtonsContainer,
} from "./styles";

export default function DescriptionCard(props: ProgrammingProps) {
  const {
    id,
    name,
    image,
    imageDescription,
    bio,
    author,
    date,
    time,
    link,
    vacancies,
    location,
    status,
    classification,
    description,
    programmingIcon,
  } = props;
  const [showBiography, setShowBiography] = useState(false);
  const isTechnicalVisit = name.toLowerCase().includes("visita técnica");
  return (
    <Container>
      <DescriptionContainer>
        <Description>{showBiography ? bio : description}</Description>
      </DescriptionContainer>
      <ButtonsContainer>
        <ButtonCard
          id={id}
          programmingIcon={programmingIcon}
          name={name}
          image={image}
          imageDescription={imageDescription}
          bio={bio}
          author={author}
          date={date}
          time={time}
          link={link}
          vacancies={vacancies}
          location={location}
          status={status}
          classification={classification}
          description={description}
        />
        <ButtonContainer onClick={() => window.open(link, "_blank")}>
          Inscrever-se
        </ButtonContainer>

        {!isTechnicalVisit && (
          <ButtonContainer onClick={() => setShowBiography(!showBiography)}>
            {showBiography ? "Ver Evento" : "Ver Biografia"}
          </ButtonContainer>
        )}
      </ButtonsContainer>
    </Container>
  );
}
