import CardHeader from "../CardHeader";
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

import { Container, Icon, IconContainer } from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";

import { HighlightsProps } from "../../types";
import { Title } from "../../../../commons/toolkit/Card/styles";

export default function Card({
  title,
  companyName,
  image,
  link,
  vacancies,
  description,
  typeEvent,
}: HighlightsProps) {
  const eventIconProps = generatedIconEvent(typeEvent);
  return (
    <Container key={title}>
      <IconContainer>
        <Icon
          src={eventIconProps.iconPath}
          alt={`Icone evento ${eventIconProps.label}`}
        />
      </IconContainer>
      <Title>{title}</Title>
      <CardHeader
        companyName={companyName}
        status={typeEvent}
        image={image}
      />
      <CardMain content={description} />
      <CardFooter
        vacancies={vacancies}
        link={link}
      />
    </Container>
  );
}
