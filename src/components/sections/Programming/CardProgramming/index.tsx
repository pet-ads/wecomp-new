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
  InfoContainer,
  HeaderContainer,
  ImageContainer,
  DescriptionContainer,
  FooterContainer,
  VacanciesContainer,
  ButtonsContainer,
  StatusContainer,
  ClassificationContainer,
  StatusInfoContainer,
} from "./styles";

import ButtonContainer from "../../../../styles/ButtonContainer";

// Components
import StrongParagraph from "../../../ui/StrongParagraph";

export default function Card({
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
      <HeaderContainer>
        <InfoContainer>
          <Title>{name}</Title>
          {location} | {date} | {time}
          <StrongParagraph>{author}</StrongParagraph>
          <StatusInfoContainer>
            <StatusContainer>{status}</StatusContainer>
            <ClassificationContainer>{classification}</ClassificationContainer>
          </StatusInfoContainer>
        </InfoContainer>

        <ImageContainer>
          <Image src={image} alt={imageDescription} />
        </ImageContainer>
      </HeaderContainer>

      <DescriptionContainer>
        <Description>{showBiography ? bio : description}</Description>
      </DescriptionContainer>

      <FooterContainer>
        <VacanciesContainer>
          <StrongParagraph>Vagas:</StrongParagraph> {vacancies}
        </VacanciesContainer>

        <ButtonsContainer>
          <ButtonContainer onClick={() => window.open(link, "_blank")}>
            Inscrever-se
          </ButtonContainer>

          {!isTechnicalVisit && (
            <ButtonContainer onClick={() => setshowBiography(!showBiography)}>
              {showBiography ? "Ver Evento" : "Ver Biografia"}
            </ButtonContainer>
          )}
        </ButtonsContainer>
      </FooterContainer>

      {children}
    </Container>
  );
}
