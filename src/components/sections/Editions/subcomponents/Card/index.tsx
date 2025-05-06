import { useState } from "react";
import { ELEVATE } from "../../../../../animations";

import { EditionProps } from "../../types";

import { Container, IconContainer, NameContainer, EditionIcon } from "./styles";

export default function Card({
  altText,
  edition,
  logoPath,
  website,
}: EditionProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <Container>
      <IconContainer
        {...ELEVATE}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <EditionIcon
          src={logoPath}
          alt={altText}
          onClick={() => window.open(website, "_blank")}
        />
      </IconContainer>
      <NameContainer isVisible={isVisible}>{edition}</NameContainer>
    </Container>
  );
}
