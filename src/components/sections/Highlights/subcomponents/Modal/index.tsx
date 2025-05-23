import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CardMain from "../CardMain";

import {
  Container,
  InformationContainer,
  EventImage,
  EventSpeakers,
  EventTitle,
  TagContainer,
  Icon,
  IconContainer,
  AbertoContainer,
} from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";
import { HighlightsProps } from "../../types";
import { AiFillCloseCircle } from "react-icons/ai";
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
  const eventIconProps = generatedIconEvent(typeEvent);

  const portalElement = document.getElementById("portal-root");

  const modalContent = (
    <AbertoContainer>
      <AiFillCloseCircle className="closeButton" onClick={setingIsOpen} />
      <IconContainer>
        <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
      </IconContainer>
      <InformationContainer>
        <EventTitle>{title}</EventTitle>
        <EventSpeakers>{companyName}</EventSpeakers>
        <TagContainer>
          <ExpirienceTag label={typeEvent} />
        </TagContainer>
      </InformationContainer>
      <EventImage src={image} />
      <CardMain content={description} />
      <LabeledValue label="Vagas" value={vacancies} />
    </AbertoContainer>
  );

  return (
    <>
      {!isOpen && (
        <Container key={title} onClick={setingIsOpen}>
          <IconContainer>
            <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
          </IconContainer>
          <EventTitle>{title}</EventTitle>
          <TagContainer>
            <ExpirienceTag label={typeEvent} />
          </TagContainer>
          <LabeledValue label="Vagas" value={vacancies} />
        </Container>
      )}
      {isOpen && portalElement && ReactDOM.createPortal(modalContent, portalElement)}
    </>
  );
}
