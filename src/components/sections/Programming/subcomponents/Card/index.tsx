import CardHeader from "../CardHeader";
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

import useToggleCardContent from "../../../../../hooks/useToggleCardContent";

import { Container, Icon, IconContainer } from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";

import { ProgrammingProps } from "../../types";

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
  typeEvent,
}: ProgrammingProps) {
  const { labelButton, cardText, handleChangeCardText } = useToggleCardContent(
    description,
    bio,
    "Ver biografia"
  );
  const eventIconProps = generatedIconEvent(typeEvent);
  return (
    <Container key={id}>
      <IconContainer>
        <Icon
          src={eventIconProps.iconPath}
          alt={`Icone evento ${eventIconProps.label}`}
        />
      </IconContainer>
      <CardHeader
        author={author}
        title={name}
        eventLocationAndDate={`${location} | ${date} | ${time}`}
        status={status}
        classification={classification}
        image={image}
        imageDescription={imageDescription}
      />
      <CardMain content={cardText} />
      <CardFooter
        vacancies={vacancies}
        link={link}
        labelButton={labelButton}
        handleChangeCardText={handleChangeCardText}
        typeEvent={typeEvent}
      />
    </Container>
  );
}
