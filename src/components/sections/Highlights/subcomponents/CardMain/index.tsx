import { Container } from "./styles";

import { CardMainProps } from "./types";

export default function CardMain({ content }: CardMainProps) {
  return <Container>{content}</Container>;
}
