import { CardHeaderProps } from "./types";

import {
  Container,
  EventImage,
  InformationContainer,
  EventSpeakers,
  TagContainer,
} from "./styles";
import ExpirienceTag from "../../../../commons/toolkit/tags/ExperienceTag";

export default function CardHeader({
  companyName,
  status,
  image
}: CardHeaderProps) {
  return (
    <Container>
      <InformationContainer>
        <EventSpeakers>{companyName}</EventSpeakers>
        <TagContainer>
          <ExpirienceTag label={status} />
        </TagContainer>
      </InformationContainer>
      <EventImage src={image} />
    </Container>
  );
}
