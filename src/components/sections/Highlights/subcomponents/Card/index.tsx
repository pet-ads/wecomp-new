import courseIcon from "@/assets/icons/programming/programmingIcon.svg";

import CardHeader from "../CardHeader";
import CardMain from "../CardMain";
import CardFooter from "../CardFooter";

import { Container, EventTitle, Icon, IconContainer } from "./styles";

import { HighlightsProps } from "../../types";

export default function Card({
  description,
  image,
  companyName,
  link,
  title,
  type,
  vacancies,
  linkCompany,
}: HighlightsProps) {
  return (
    <Container key={title}>
      <IconContainer>
        <Icon src={courseIcon} alt="Icone do evento de destaque" />
      </IconContainer>
      <EventTitle>{title}</EventTitle>
      <CardHeader
        classification={type}
        image={image}
        imageDescription={`Logo da empresa ${companyName}`}
        linkCompany={linkCompany}
      />
      <CardMain content={description} />
      <CardFooter vacancies={vacancies} link={link} />
    </Container>
  );
}
