import ExpirienceTag from "../../../../ui/tags/ExperienceTag";

import {
  Container,
  EventImage,
  InformationContainer,
  TagContainer,
  EventTitle,
} from "./styles";

import { CardHeaderProps } from "../../../../../types/Highlights";

export default function CardHeader({
  title,
  classification,
  image,
  imageDescription,
  linkCompany,
}: CardHeaderProps) {
  const handleRedirectOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container>
      <InformationContainer>
        <EventTitle>{title}</EventTitle>
        <TagContainer>
          <ExpirienceTag label={classification} />
        </TagContainer>
      </InformationContainer>
      <EventImage
        src={image}
        alt={imageDescription}
        onClick={() => handleRedirectOnClick(linkCompany)}
      />
    </Container>
  );
}
