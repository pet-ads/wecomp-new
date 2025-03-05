// Styles
import {
  Container,
  EventImage,
  InformationContainer,
  EventDetails,
  EventSpeakers,
  TagContainer,
  EventTitle,
} from "./styles";

// Types
import { CardHeaderProps } from "../../../../../types/Programming";

export default function CardHeader({
  title,
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
        <EventTitle>{title}</EventTitle>
        <EventDetails>{eventLocationAndDate}</EventDetails>
        <EventSpeakers>{author}</EventSpeakers>
        <TagContainer>
          <div>{status}</div>
          <div>{classification}</div>
        </TagContainer>
      </InformationContainer>
      <EventImage src={image} alt={imageDescription} />
    </Container>
  );
}
