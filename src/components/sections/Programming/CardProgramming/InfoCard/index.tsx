// Types
import { ProgrammingProps } from "../../../../../types/Programming";

// Styles
import {
    Container,
  HeaderContainer,
  InfoContainer,
  Title,
  StatusInfoContainer,
  StatusContainer,
  ClassificationContainer,
  Image,
  ImageContainer,
  ProgrammingIconContainer,
  ProgrammingIcon,
} from "./styles";

import StrongParagraph from "../../../../ui/StrongParagraph";

export default function InfoCard(props: ProgrammingProps) {
  const {
    name,
    location,
    date,
    time,
    author,
    status,
    classification,
    image,
    imageDescription,
    programmingIcon,
  } = props;

  return (
    <Container>
    <ProgrammingIconContainer>
            <ProgrammingIcon src={programmingIcon} alt="Icon"/>
    </ProgrammingIconContainer>
    <HeaderContainer>
      <InfoContainer>
        <Title>{name}</Title>
        {location} | {date} | {time}
        <StrongParagraph>{author}</StrongParagraph>
        <StatusInfoContainer>
          <StatusContainer>{status}</StatusContainer>
          <ClassificationContainer>{classification}</ClassificationContainer>
        </StatusInfoContainer>
      </InfoContainer>

      <ImageContainer>
        <Image src={image} alt={imageDescription} />
      </ImageContainer>
    </HeaderContainer>
    </Container>
  );
}
