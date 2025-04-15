import { ELEVATE } from "../../../../../animations";
import { ContactProps } from "../../types";
import { Container, NameContainer, SocialIcon } from "./styles";

export default function Card({
  contactUrl,
  iconAlt,
  iconPath,
  username,
}: ContactProps) {
  return (
    <Container>
      <SocialIcon
        {...ELEVATE}
        src={iconPath}
        alt={iconAlt}
        onClick={() => window.open(contactUrl, "_blank")}
      />
      <NameContainer>{username}</NameContainer>
    </Container>
  );
}
