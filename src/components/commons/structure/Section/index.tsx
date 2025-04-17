import { SectionProps } from "./types";

import { Container } from "./styles";

export const Section = ({ children, sectionId }: SectionProps) => {
  return (
    <Container id={sectionId} background={sectionId == "Hero" ? false : true}>
      {children}
    </Container>
  );
};
