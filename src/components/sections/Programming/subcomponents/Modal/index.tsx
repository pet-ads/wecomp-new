import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import useToggleCardContent from "../../../../../hooks/toggle/useToggleCardContent";

import useIsMobileModal from "../../../../../hooks/window/MobileModal";
import useIsMobileModalHeight from "../../../../../hooks/window/MobileModalHeight";

import RedirectButton from "../../../../commons/toolkit/RedirectButton";

import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";
//import CardMain from "../CardMain";

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
  ContainerImagem,
  IconContainer,
  AbertoContainer,
  ContainerHead,
  ContainerTitle,
  ContainerFooter,
  CloseButton,
  TextSobre,
  ContainerButtons,
  EventDescriptionButton,
  ContainerBottom,
  PlusIcon,
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

  const cutoffDate = new Date("2025-09-15T00:01:00");
  const [isAfterCutoff, setIsAfterCutoff] = useState(new Date() >= cutoffDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= cutoffDate) {
        setIsAfterCutoff(true);
        clearInterval(interval);
      }
    }, 1000 * 30);

    return () => clearInterval(interval);
  }, []);

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

  const isShowSubscriveButton = isAfterCutoff && link && status != "Closed";

  const mobileModalContent = (
    <AbertoContainer>
      <CloseButton onClick={setingIsOpen} />
      <InformationContainer>
        <EventTitle isOpen={isOpen}>{name}</EventTitle>
        <EventDetails isOpen={isOpen}>
          {[location, date, time].filter(Boolean).join(" | ")}
        </EventDetails>
        <EventSpeakers>{author}</EventSpeakers>
      </InformationContainer>

      <TagContainer isOpen>
        <AvailabilityTag label={status} />
        <DifficultyTag label={classification} />
      </TagContainer>

      <ContainerImagem>
        <EventImage src={image} alt={imageDescription} />
      </ContainerImagem>

      <ContainerMainModal>
        <ContainerMain>
          <TextSobre>
            {labelButton === "Ver biografia" ? "Descrição:" : "Biografia:"}
          </TextSobre>
          {cardText}
        </ContainerMain>
      </ContainerMainModal>

      <ContainerBottom>
        <ContainerVacancies>
          <LabeledValue label="Vagas" value={vacancies} />
          <ContainerButtons>
            {bio?.trim() &&
              !eventsDisablingActionButton.includes(typeEvent) && (
                <EventDescriptionButton onClick={handleChangeCardText}>
                  {labelButton}
                </EventDescriptionButton>
              )}
            {isShowSubscriveButton && (
              <RedirectButton link={link}>Inscrever-se</RedirectButton>
            )}
          </ContainerButtons>
        </ContainerVacancies>
      </ContainerBottom>
    </AbertoContainer>
  );
  const modalContent = (
    <AbertoContainer>
      <CloseButton onClick={setingIsOpen} />
      <InformationContainer>
        <EventTitle isOpen={isOpen}>{name}</EventTitle>
        <EventDetails isOpen={isOpen}>
          {[location, date, time].filter(Boolean).join(" | ")}
        </EventDetails>
        <EventSpeakers>{author}</EventSpeakers>
      </InformationContainer>

      <TagContainer isOpen>
        <AvailabilityTag label={status} />
        <DifficultyTag label={classification} />
      </TagContainer>

      <TextSobre>Descrição:</TextSobre>
      <ContainerMainModal>
        <ContainerMain>{description}</ContainerMain>
      </ContainerMainModal>

      <ContainerImagem>
        <EventImage src={image} alt={imageDescription} />
      </ContainerImagem>

      {bio?.trim() && (
        <ContainerMain>
          <TextSobre>Biografia:</TextSobre>
          {bio}
        </ContainerMain>
      )}

      <ContainerBottom>
        <ContainerVacancies>
          <LabeledValue label="Vagas" value={vacancies} />
          <ContainerButtons>
            {isShowSubscriveButton && (
              <RedirectButton link={link}>Inscrever-se</RedirectButton>
            )}
          </ContainerButtons>
        </ContainerVacancies>
      </ContainerBottom>
    </AbertoContainer>
  );

  return (
    <>
      {!isOpen && (
        <Container key={name} onClick={setingIsOpen}>
          <ContainerHead>
            <ContainerTitle>
              <IconContainer>
                <Icon
                  src={eventIconProps.iconPath}
                  alt={`Icone evento ${eventIconProps.label}`}
                />
              </IconContainer>
              <EventTitle isOpen={isOpen}>{name}</EventTitle>
              <PlusIcon onClick={setingIsOpen} aria-label="Abrir detalhes" />
            </ContainerTitle>
            <EventDetails isOpen={isOpen}>
              {[location, date, time].filter(Boolean).join(" | ")}
            </EventDetails>
          </ContainerHead>
          <ContainerFooter>
            <LabeledValue label="Vagas" value={vacancies} />
            <TagContainer isOpen={isOpen}>
              <AvailabilityTag label={status} />
              <DifficultyTag label={classification} />
            </TagContainer>
          </ContainerFooter>
        </Container>
      )}
      {isOpen &&
        portalElement &&
        ReactDOM.createPortal(
          shouldUseMobileLayout ? mobileModalContent : modalContent,
          portalElement
        )}
    </>
  );
}
