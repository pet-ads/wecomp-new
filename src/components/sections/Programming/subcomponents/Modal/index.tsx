import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import useToggleCardContent from "../../../../../hooks/toggle/useToggleCardContent";

import useIsMobileModal from "../../../../../hooks/window/MobileModal";
import useIsMobileModalHeight from "../../../../../hooks/window/MobileModalHeight";

import RedirectButton from "../../../../commons/toolkit/RedirectButton";

import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";
import CardMain from "../CardMain";

import {
  Container,
  InformationContainer,
  ContainerVacancies,
  EventImage,
  ContainerMainModal,
  ContainerMain,
  EventDetails,
  EventSpeakers,
  EventTitle,
  TagContainer,
  Icon,
  IconContainer,
  AbertoContainer,
  ConteinerHead,
  ConteinerTitle,
  ContainerFooter,
  ContainerEventModal,
  CloseButton,
  TextSobre,
  ContainerButtons,
  EventDescriptionButton,
} from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";
import { ProgrammingProps } from "../../types";

import LabeledValue from "../../../../commons/toolkit/LabeledValue";

export default function CardProjeto({
  classification,
  description,
  bio,
  name,
  author,
  image,
  imageDescription,
  vacancies,
  status,
  typeEvent,
  date,
  time,
  location,
  link,
}: ProgrammingProps) {
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

  const isMobileModal = useIsMobileModal();
  const isMobileModalHeight = useIsMobileModalHeight();
  const shouldUseMobileLayout = isMobileModal || isMobileModalHeight;

  const setingIsOpen = () => setIsOpen(!isOpen);
  const eventIconProps = generatedIconEvent(typeEvent);

  const { labelButton, cardText, handleChangeCardText } = useToggleCardContent(
        description,
        bio,
        "Ver biografia"
      );

  const portalElement = document.getElementById("portal-root");
  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];
  
  const mobileModalContent = (
    <AbertoContainer>
      <CloseButton onClick={setingIsOpen} />
      {/*<IconContainer>
        <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
      </IconContainer>*/}
      <InformationContainer>
        <ContainerEventModal>
          <EventTitle isOpen={isOpen}>{name}</EventTitle>
          <EventDetails isOpen={isOpen}>{`${location} | ${date} | ${time}`}</EventDetails>
          <EventSpeakers>{author}</EventSpeakers>

        </ContainerEventModal>
        
      </InformationContainer>

      <TagContainer isOpen>
        <AvailabilityTag label={status} />
        <DifficultyTag label={classification} />
      </TagContainer>
      
      <ContainerMainModal>
        <ContainerMain>
          <CardMain content={cardText} />
        </ContainerMain>
        <EventImage src={image} alt={imageDescription} />
      </ContainerMainModal>
      
      <ContainerVacancies>
        <LabeledValue label="Vagas" value={vacancies} />
        <ContainerButtons>
          {eventsDisablingActionButton.includes(typeEvent) ? null : (
          <EventDescriptionButton onClick={handleChangeCardText}>
            {labelButton}
          </EventDescriptionButton> )}
           <RedirectButton children="Inscrever-se" link={link} />
        </ContainerButtons>
      </ContainerVacancies>
    </AbertoContainer>
  
  );

  const modalContent = (
    <AbertoContainer>
      {/*<IconContainer>
        <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
        </IconContainer>*/}
      <CloseButton onClick={setingIsOpen} />
      <InformationContainer>
        <ContainerEventModal>
          <EventTitle isOpen={isOpen}>{name}</EventTitle>
          <EventDetails isOpen={isOpen}>{`${location} | ${date} | ${time}`}</EventDetails>
          <EventSpeakers>{author}</EventSpeakers>

        </ContainerEventModal>
        
      </InformationContainer>

      <TagContainer isOpen>
        <AvailabilityTag label={status} />
        <DifficultyTag label={classification} />
      </TagContainer>

      <div>
      <TextSobre>Sobre o curso:</TextSobre>
        <ContainerMainModal>
          <ContainerMain>
            <CardMain content={cardText} />
          </ContainerMain>
          <EventImage src={image} alt={imageDescription} />
        </ContainerMainModal>
      </div>
      
      {bio?.trim() && (
        <ContainerMain>
          <strong>Biografia:</strong><br />
          {bio}
        </ContainerMain>
      )}
      
      <ContainerVacancies>
        <LabeledValue label="Vagas" value={vacancies} />
        <ContainerButtons>
           <RedirectButton children="Inscrever-se" link={link} />
        </ContainerButtons>
      </ContainerVacancies>
    </AbertoContainer>
  );

  return (
    <>
      {!isOpen && (
        <Container key={name} onClick={setingIsOpen}>
          <ConteinerHead>
            <ConteinerTitle>
              <IconContainer>
              <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
            </IconContainer>
              <EventTitle isOpen={isOpen}>{name}</EventTitle>
            </ConteinerTitle>
            <EventDetails isOpen={isOpen}>{`${location} - ${date} | ${time}`}</EventDetails>
          </ConteinerHead>
          
          <ContainerFooter>
            <LabeledValue label="Vagas" value={vacancies} />
            <TagContainer isOpen={isOpen}>
              <AvailabilityTag label={status} />
              <DifficultyTag label={classification} />
            </TagContainer>

          </ContainerFooter>
        </Container>
      )}
      {isOpen && portalElement && ReactDOM.createPortal(shouldUseMobileLayout ? mobileModalContent : modalContent, portalElement)}
    </>
  );
}