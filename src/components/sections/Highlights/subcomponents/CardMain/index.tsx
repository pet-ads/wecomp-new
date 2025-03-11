import { Container } from "./styles";

import { CardMainProps } from "../../../../../types/Highlights";

export default function CardMain({ content }: CardMainProps) {
  return <Container>{content}</Container>;
}
