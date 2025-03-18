import { Container, EventTitle, Icon, IconContainer } from "./styles";

import { HighlightsProps } from "../../types";
import { generatedIconEvent } from "../../../../../utils/generatedIconEvent";
import CardHeader from "../CardHeader";
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

export default function Card({
  id,
  description,
  image,
  imageDescription,
  link,
  title,
  type,
  vacancies,
  linkCompany,
}: HighlightsProps) {
  const eventIconProps = generatedIconEvent("Course");

  return (
    <Container key={id}>
      <IconContainer>
        <Icon
          src={eventIconProps.iconPath}
          alt={`Icone evento ${eventIconProps.label}`}
        />
      </IconContainer>
      <EventTitle>{title}</EventTitle>
      <CardHeader
        classification={type}
        image={image}
        imageDescription={imageDescription}
        linkCompany={linkCompany}
      />
      <CardMain content={description} />
      <CardFooter vacancies={vacancies} link={link} />
    </Container>
  );
}
