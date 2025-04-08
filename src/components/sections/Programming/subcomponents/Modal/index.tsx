
import { useState } from "react";

import CardMain from "../CardMain";

import { Container, InformationContainer,EventImage, EventDetails, EventSpeakers ,EventTitle, TagContainer,  Icon, IconContainer, AbertoContainer  } from "./styles";
import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";

import { ProgrammingProps } from "../../types";

import { AiFillCloseCircle } from "react-icons/ai";

import LabeledValue from "../../../../ui/LabeledValue";
import AvailabilityTag from "../../../../ui/tags/AvailabilityTag";
import DifficultyTag from "../../../../ui/tags/DifficultyTag";



export default function CardProjeto({
  classification,
  description,
  bio,
  name,
  author,
  image,
  imageDescription,
  id,
  vacancies,
  status,
  typeEvent,
  date,
  time,
  location,
}: ProgrammingProps) {
  const [isOpen, setIsOpen] = useState(false);
  function setingIsOpen() {
    setIsOpen(!isOpen);
  }
  const eventIconProps = generatedIconEvent(typeEvent);
  return (
    <>
    {!isOpen && (
      <Container key={id} onClick={setingIsOpen}>
        <IconContainer>
            <Icon
              src={eventIconProps.iconPath}
              alt={`Icone evento ${eventIconProps.label}`}
            />
          </IconContainer>
          
          <EventTitle>{name}</EventTitle>

          <TagContainer>
            <AvailabilityTag label={status} />
            <DifficultyTag label={classification} />
          </TagContainer>

          <LabeledValue label="Vagas" value={vacancies} />

      </Container>




    )}
    {isOpen && (

      <>
      <AbertoContainer>

        <AiFillCloseCircle className="closeButton" onClick={() => setIsOpen(!isOpen)} />
        <IconContainer>
            <Icon
              src={eventIconProps.iconPath}
              alt={`Icone evento ${eventIconProps.label}`}
            />
        </IconContainer>
        <InformationContainer>
          <EventTitle>{name}</EventTitle>
          <EventDetails>{`${location} | ${date} | ${time}`}</EventDetails>
          <EventSpeakers>{author}</EventSpeakers>
          <TagContainer>
            <AvailabilityTag label={status} />
            <DifficultyTag label={classification} />
          </TagContainer>
        </InformationContainer>
        <EventImage src={image} alt={imageDescription} />


        <CardMain content={bio} />
        <CardMain content={description} />

        <LabeledValue label="Vagas" value={vacancies} />

      </AbertoContainer>
      
      
      </>




    )}




    </>




  );
}