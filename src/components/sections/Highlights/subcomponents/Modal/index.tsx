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
  BoxTitle,
  BoxHead,
  BoxFooter,
  CloseButton,
  ContainerEventModal,
  ContainerVacancies,
  ContainerButtons,
  EventDescriptionButton,
  ContainerMainModal,
  ContainerMain,
  ContainerLogoTag
} from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";
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
  const eventIconProps = generatedIconEvent(typeEvent);

  const portalElement = document.getElementById("portal-root");

  const modalContent = (
    <AbertoContainer>
      <CloseButton onClick={setingIsOpen} />
      {/*<IconContainer>
        <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
      </IconContainer>*/}

      <ContainerLogoTag>
        <div>
          <EventSpeakers isOpen={isOpen}>{companyName}</EventSpeakers>
          <TagContainer isOpen>
            <ExpirienceTag label={typeEvent} />
          </TagContainer>
        </div>
        <EventImage src={image} alt={'logo ' + companyName} />
      </ContainerLogoTag>

      
      <InformationContainer>
        <ContainerEventModal>
          <EventTitle isOpen={isOpen}>{title}</EventTitle>
        </ContainerEventModal>
      </InformationContainer>
      {/*<EventImage src={image} />
      <CardMain content={description} />*/}

      <ContainerMainModal>
        <ContainerMain>
          <CardMain content={description} />
        </ContainerMain>
      </ContainerMainModal>

      <ContainerVacancies>
        <LabeledValue label="Vagas" value={vacancies} />
        <ContainerButtons>
          <EventDescriptionButton>
            Inscrever-se
          </EventDescriptionButton>
        </ContainerButtons>
      </ContainerVacancies>
    </AbertoContainer>
  );

  return (
    <>
      {!isOpen && (
        <Container isOpen key={title} onClick={setingIsOpen}>
          <BoxHead>
            <BoxTitle>
              <IconContainer>
                <Icon src={eventIconProps.iconPath} alt={`Icone evento ${eventIconProps.label}`} />
              </IconContainer>
              <EventSpeakers  isOpen={isOpen}>{companyName}</EventSpeakers>
            </BoxTitle>

            <EventTitle isOpen={isOpen}>{title}</EventTitle>
          </BoxHead>
          <BoxFooter>
            <LabeledValue label="Vagas" value={vacancies} />
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
