import { SectionProps } from "./types";

import { Container } from "./styles";

export const Section = ({ children }: SectionProps) => {
  return <Container>{children}</Container>;
};
