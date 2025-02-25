import { useState } from "react";

// Types
import { ProgrammingProps } from "../../../../types/Programming";


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

// Componente Card
export default function Card({
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
}: ProgrammingProps) {
  const [showBiography, setShowBiography] = useState(false);

  const isTechnicalVisit = name.toLowerCase().includes("visita técnica");

  return (
    <Container key={id}>
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
            <ButtonContainer onClick={() => setShowBiography(!showBiography)}>
              {showBiography ? "Ver Evento" : "Ver Biografia"}
            </ButtonContainer>
          )}
        </ButtonsContainer>
      </FooterContainer>
    </Container>
  );
}