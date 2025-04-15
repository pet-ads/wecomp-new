import { ELEVATE } from "../../../../animations";

import { EditionProps } from "../../types";

import { Container, IconContainer, NameContainer, EditionIcon } from "./styles";

export default function Card({
  altText,
  edition,
  logoPath,
  website,
}: EditionProps) {
  return (
    <Container>
      <IconContainer {...ELEVATE}>
        <EditionIcon
          src={logoPath}
          alt={altText}
          onClick={() => window.open(website, "_blank")}
        />
      </IconContainer>
      <NameContainer>{edition}</NameContainer>
    </Container>
  );
}
