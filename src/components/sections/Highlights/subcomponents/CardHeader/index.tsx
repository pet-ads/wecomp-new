import ExpirienceTag from "../../../../ui/tags/ExperienceTag";

import {
  Container,
  EventImage,
  InformationContainer,
  TagContainer,
} from "./styles";

import { CardHeaderProps } from "./types";

export default function CardHeader({
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
