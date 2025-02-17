import { useState } from "react";

// Types
import { CardProps } from "../../../../types/Card";
import { ProgrammingProps } from "../../../../types/Programming";

type CardComponentProps = ProgrammingProps & CardProps;

// Styles
import {
  Container,
  Title,
  Description,
  Image,
  LinkButtonContainer,
  InfoContainer,
  TopContainer,
  ImageContainer,
  MiddleContainer,
  BottomContainer,
  VacanciesContainer,
  ButtonsContainer,
} from "./styles";

import ButtonContainer from "../../../../styles/ButtonContainer";

// Components
import StrongParagraph from "../../../ui/StrongParagraph";

export default function CardProgramming({
  children,
  name,
  image,
  imageDescription,
  bio,
  author,
  date,
  time,
  link,
  active,
  vacancies,
  location,
  status,
  classification,
  description,
}: CardComponentProps) {
  const [showBiography, setshowBiography] = useState(false);

  const isTechnicalVisit = name.toLowerCase().includes("visita técnica");

  if (!active) {
    return null;
  }

  return (
    <Container>
      <TopContainer>
        <InfoContainer>
          <Title>{name}</Title>
          <StrongParagraph>Local:</StrongParagraph> {location}
          <StrongParagraph>Data:</StrongParagraph> {date}
          <StrongParagraph>Horário:</StrongParagraph> {time}
          <StrongParagraph>Autor:</StrongParagraph> {author}
          <StrongParagraph>Status:</StrongParagraph> {status}
          <StrongParagraph>Classificação:</StrongParagraph> {classification}
        </InfoContainer>

        <ImageContainer>
          <Image src={image} alt={imageDescription} />
        </ImageContainer>
      </TopContainer>

      <MiddleContainer>
        <Description>{showBiography ? bio : description}</Description>
      </MiddleContainer>

      <BottomContainer>
        <VacanciesContainer>
          <StrongParagraph>Vagas:</StrongParagraph> {vacancies}
        </VacanciesContainer>

        <ButtonsContainer>
          <LinkButtonContainer
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscrever-se
          </LinkButtonContainer>
          {!isTechnicalVisit && (
            <ButtonContainer onClick={() => setshowBiography(!showBiography)}>
              {showBiography ? "Ver Evento" : "Ver Biografia"}
            </ButtonContainer>
          )}
        </ButtonsContainer>
      </BottomContainer>

      {children}
    </Container>
  );
}
