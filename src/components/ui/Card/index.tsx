import { useState } from "react";

// Types
import { CardProps } from "../../../types/Card";
import { ProgrammingProps } from "../../../types/Programming";

type CardComponentProps = ProgrammingProps & CardProps;

// Styles
import {
  Container,
  Title,
  Description,
  Image,
  LinkButtonContainer,
  InfoContainer,
} from "./styles";

import ButtonContainer  from "../../../styles/ButtonContainer";

export default function Card({ children, name, image, imageDescription, bio, author, date, time, link, active, vacancies, location, status, classification, description }:CardComponentProps) {
  const [showBiography, setshowBiography] = useState(false);

  const isTechnicalVisit = name.toLowerCase().includes("visita técnica");

  if (!active) {
    return null;
  }

  return (
    <Container>

      <Title>{name}</Title>

      <Description>{showBiography ? bio : description}</Description>

      {!isTechnicalVisit && (
        <ButtonContainer onClick={() => setshowBiography(!showBiography)}>
          {showBiography ? "Ver informações do evento" : "Ver biografia"}
        </ButtonContainer>
      )}

      <InfoContainer>
        {author && <p><strong>Autor:</strong> {author}</p>}
        {date && <p><strong>Data:</strong> {date}</p>}
        {time && <p><strong>Horário:</strong> {time}</p>}
        {location && <p><strong>Local:</strong> {location}</p>}
        {status && <p><strong>Status:</strong> {status}</p>}
        {classification && <p><strong>Classificação:</strong> {classification}</p>}
        {vacancies && <p><strong>Vagas disponíveis:</strong> {vacancies}</p>}
      </InfoContainer >

      {image && (
        <Image src={image} alt={imageDescription} />
      )}

      {link && (
        <LinkButtonContainer href={link} target="_blank" rel="noopener noreferrer">
          Inscrever-se
        </LinkButtonContainer>
      )}

      {children}
    </Container>
  );
}
