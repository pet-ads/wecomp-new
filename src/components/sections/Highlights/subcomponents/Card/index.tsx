import CardHeader from "../CardHeader";
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

import { Container, Icon, IconContainer, EventImage, ContainerHeader, ContainerIconTag } from "./styles";

import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";

import { HighlightsProps } from "../../types";
import { Title } from "../../../../commons/toolkit/Card/styles";
import { TagContainer } from "../CardHeader/styles";
import ExpirienceTag from "../../../../commons/toolkit/tags/ExperienceTag";

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
      <ContainerHeader>
        <ContainerIconTag>
          <IconContainer>
            <Icon
              src={eventIconProps.iconPath}
              alt={`Icone evento ${eventIconProps.label}`}
            />
          </IconContainer>

          <TagContainer>
            <ExpirienceTag label={typeEvent} />
          </TagContainer>
        </ContainerIconTag>
        <EventImage src={image} />
      </ContainerHeader>
      <Title>{title}</Title>
      <CardHeader
        companyName={companyName}
      />
      <CardMain content={description} />
      <CardFooter
        vacancies={vacancies}
        link={link}
      />
    </Container>
  );
}
