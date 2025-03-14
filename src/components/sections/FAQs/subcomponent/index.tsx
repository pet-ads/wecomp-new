import { Container, Content } from "./styles";

import { FAQProps } from "../types";

export default function FAQ({ question, response }: FAQProps) {
  return (
    <Container>
      {question}
      <Content>{response}</Content>
    </Container>
  );
}
