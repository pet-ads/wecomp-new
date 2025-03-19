import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Text from "../../../../components/ui/Text";
import { FAQProps } from "../../types";
import {
  AnswerContainer,
  Container,
  QuestionContainer,
  IconWrapper,
} from "./styles";

export default function Details({ question, answer }: FAQProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Container isVisible={isVisible}>
      <QuestionContainer onClick={() => setIsVisible((prev) => !prev)}>
        <Text
          width="100%"
          justifyContent="flex-start"
          fontSize="15pt"
          fontWeight="bold"
          textAlign="left"
        >
          {question}
        </Text>
        <IconWrapper
          animate={{ rotate: isVisible ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoMdAdd />
        </IconWrapper>
      </QuestionContainer>
      <AnswerContainer isVisible={isVisible}>
        <Text justifyContent="flex-start" width="calc(100% - 2rem)" fontSize="1rem">
          {answer}
        </Text>
      </AnswerContainer>
    </Container>
  );
}
