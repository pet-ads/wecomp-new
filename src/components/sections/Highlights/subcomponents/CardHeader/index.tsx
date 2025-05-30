import { CardHeaderProps } from "./types";

import {
  Container,
  InformationContainer,
  EventSpeakers
} from "./styles";

export default function CardHeader({
  companyName
}: CardHeaderProps) {
  return (
    <Container>
      <InformationContainer>
        <EventSpeakers>{companyName}</EventSpeakers>
      </InformationContainer>
    </Container>
  );
}
