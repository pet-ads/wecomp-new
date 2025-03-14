import { CardProps } from "./types";

type CardComponentProps = CardProps;

import { Container } from "./styles";

export default function Card({ children }: CardComponentProps) {
  return <Container>{children}</Container>;
}
