import AvailabilityTag from "../../../../commons/toolkit/tags/AvailabilityTag";
import DifficultyTag from "../../../../commons/toolkit/tags/DifficultyTag";

import { CardHeaderProps } from "./types";

import {
  Container,
  EventImage,
  InformationContainer,
  EventDetails,
  EventSpeakers,
  TagContainer,
} from "./styles";

export default function CardHeader({
  eventLocationAndDate,
  author,
  status,
  classification,
  image,
  imageDescription,
}: CardHeaderProps) {
  return (
    <Container>
      <InformationContainer>
        <EventDetails>{eventLocationAndDate}</EventDetails>
        <EventSpeakers>{author}</EventSpeakers>
        <TagContainer>
          <DifficultyTag label={classification} />
          <AvailabilityTag label={status} />
        </TagContainer>
      </InformationContainer>
      <EventImage src={image} alt={imageDescription} draggable={false} />
    </Container>
  );
}
