import { Container } from "./styles";

import { CardMainProps } from "../../../../../types/HighlightsSection";

export default function CardMain({ content }: CardMainProps) {
  return <Container>{content}</Container>;
}
