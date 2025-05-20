import { useEffect, useState } from "react";
import ReactDOM from "react-dom";



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

  const portalElement = document.getElementById("portal-root");

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
        <EventImage src={image} alt={imageDescription} />
      </InformationContainer>
      <TagContainer>
        <AvailabilityTag label={status} />
        <DifficultyTag label={classification} />
      </TagContainer>
      <CardMain content={bio} />
      <CardMain content={description} />
      <LabeledValue label="Vagas" value={vacancies} />
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
          <TagContainer>
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