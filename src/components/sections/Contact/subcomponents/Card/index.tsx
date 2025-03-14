import { ELEVATE } from "../../../../../animations";
import { ContactProps } from "../../types";
import { Container, IconContainer, NameContainer, SocialIcon } from "./styles";

export default function Card({
  contactUrl,
  iconAlt,
  iconPath,
  username,
}: ContactProps) {
  return (
    <Container>
      <IconContainer {...ELEVATE}>
        <SocialIcon
          src={iconPath}
          alt={iconAlt}
          onClick={() => window.open(contactUrl, "_blank")}
        />
      </IconContainer>
      <NameContainer>{username}</NameContainer>
    </Container>
  );
}
