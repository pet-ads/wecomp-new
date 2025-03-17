import AvailabilityTag from "../../../../ui/tags/AvailabilityTag";
import DifficultyTag from "../../../../ui/tags/DifficultyTag";

import {
  Container,
  EventImage,
  InformationContainer,
  EventDetails,
  EventSpeakers,
  TagContainer,
} from "./styles";

import { CardHeaderProps } from "../../types";

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
          <AvailabilityTag label={status} />
          <DifficultyTag label={classification} />
        </TagContainer>
      </InformationContainer>
      <EventImage src={image} alt={imageDescription} />
    </Container>
  );
}
