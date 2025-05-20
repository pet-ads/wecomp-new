import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import useToggleCardContent from "../../../../../hooks/toggle/useToggleCardContent";



import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";
import CardMain from "../CardMain";

import {
  Container,
  InformationContainer,
  EventImage,
  EventDetails,
  EventSpeakers,
  EventTitle,
  TagContainer,
  Icon,
  IconContainer,
  AbertoContainer,
  ContainerEvent,
  CloseButton,
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


  const setingIsOpen = () => setIsOpen(!isOpen);
  const eventIconProps = generatedIconEvent(typeEvent);

  const { labelButton, cardText, handleChangeCardText } = useToggleCardContent(
        description,
        bio,
        "Ver biografia"
      );

  const portalElement = document.getElementById("portal-root");
  const eventsDisablingActionButton = ["TechnicalVisit", "Opening"];

  const modalContent = (
    <AbertoContainer>
      <CloseButton onClick={setingIsOpen} />
      {/*<IconContainer>
        <Icon src={eventIconProps.iconPath} alt={Icone evento ${eventIconProps.label}} />
      </IconContainer>*/}
      <InformationContainer>
        <ContainerEvent>
          <EventTitle isOpen={isOpen}>{name}</EventTitle>
          <EventDetails>{`${location} | ${date} | ${time}`}</EventDetails>
          <EventSpeakers>{author}</EventSpeakers>

        </ContainerEvent>
        
      </InformationContainer>

      <TagContainer isOpen>
        <AvailabilityTag label={status} />
        <DifficultyTag label={classification} />
      </TagContainer>
      
      <EventImage src={image} alt={imageDescription} />
      
      <CardMain content={cardText} />
      

      <LabeledValue label="Vagas" value={vacancies} />
      <ContainerButtons>
        {eventsDisablingActionButton.includes(typeEvent) ? null : (
        <EventDescriptionButton onClick={handleChangeCardText}>
          {labelButton}
        </EventDescriptionButton> )}
      </ContainerButtons>
    </AbertoContainer>
  );

  return (
    <>
      {!isOpen && (
        <Container key={name} onClick={setingIsOpen}>
          <IconContainer>
            <EventTitle isOpen={isOpen}>{name}</EventTitle>
            <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
          </IconContainer>
          <TagContainer isOpen={isOpen}>
            <AvailabilityTag label={status} />
            <DifficultyTag label={classification} />
          </TagContainer>
          <LabeledValue label="Vagas" value={vacancies} />
        </Container>
      )}
      {isOpen && portalElement && ReactDOM.createPortal(modalContent, portalElement)}
    </>
  );
}