import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import {
  Container,
  InformationContainer,
  EventImage,
  EventSpeakers,
  EventTitle,
  TagContainer,
  AbertoContainer,
  BoxHead,
  BoxFooter,
  CloseButton,
  ContainerVacancies,
  Vacancies,
  ContainerButtons,
  EventDescriptionButton,
  ContainerMainModal,
  ContainerLogoTag,
  ModalContentWrapper
} from "./styles";

import { HighlightsProps } from "../../types";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";
import ExpirienceTag from "../../../../commons/toolkit/tags/ExperienceTag";



export default function CardProjeto({
  title,
  image,
  companyName,
  vacancies,
  description,
  typeEvent,
}: HighlightsProps) {
  const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
    if (isOpen) {
      
      document.body.style.overflow = "hidden";
    } else {
      
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);


  const setingIsOpen = () => setIsOpen(!isOpen);

  const portalElement = document.getElementById("portal-root");

  const modalContent = (
  <AbertoContainer>
    <ModalContentWrapper>
      <CloseButton onClick={setingIsOpen} />
      <TagContainer isOpen>
            <ExpirienceTag label={typeEvent} />
      </TagContainer>
      <ContainerLogoTag>
        <div>
          <EventSpeakers isOpen={isOpen}>{companyName}</EventSpeakers>
        </div>
        <EventImage src={image} alt={'logo ' + companyName} />
      </ContainerLogoTag>

      <InformationContainer>
        <EventTitle isOpen={isOpen}>{title}</EventTitle>
      </InformationContainer>

      <ContainerMainModal>{description}</ContainerMainModal>

      <ContainerVacancies>
        <LabeledValue label="Vagas" value={vacancies} />
        <ContainerButtons>
          <EventDescriptionButton>
            Acesse
          </EventDescriptionButton>
        </ContainerButtons>
      </ContainerVacancies>
    </ModalContentWrapper>
  </AbertoContainer>
);


  return (
    <>
      {!isOpen && (
        <Container isOpen key={title} onClick={setingIsOpen}>
          <BoxHead>
            <EventSpeakers  isOpen={isOpen}>{companyName}</EventSpeakers>

            <EventTitle isOpen={isOpen}>{title}</EventTitle>
          </BoxHead>
          <BoxFooter>
            <Vacancies>Vagas: {vacancies}</Vacancies>
            <TagContainer isOpen>
              <ExpirienceTag label={typeEvent} />
            </TagContainer>
          </BoxFooter>
        </Container>
      )}
      {isOpen && portalElement && ReactDOM.createPortal(modalContent, portalElement)}
    </>
  );
}