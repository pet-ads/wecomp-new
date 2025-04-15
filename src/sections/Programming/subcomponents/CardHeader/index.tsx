import AvailabilityTag from "../../../../components/ui/tags/AvailabilityTag";
import DifficultyTag from "../../../../components/ui/tags/DifficultyTag";

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
          <AvailabilityTag label={status} />
          <DifficultyTag label={classification} />
        </TagContainer>
      </InformationContainer>
      <EventImage src={image} alt={imageDescription} />
    </Container>
  );
}
