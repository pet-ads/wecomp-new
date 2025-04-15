import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Text from "../../../../components/ui/Text";
import { FAQProps } from "../../types";
import {
  FAQContainer,
  QuestionWrapper,
  AnswerWrapper,
  ToggleIcon,
  AnswerText,
  QuestionText,
} from "./styles";

export default function Details({ question, answer }: FaqProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <FAQContainer>
      <QuestionWrapper onClick={() => setIsVisible((prev) => !prev)}>
        <QuestionText>{question}</QuestionText>
        <ToggleIcon
          animate={{ rotate: isVisible ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoMdAdd />
        </ToggleIcon>
      </QuestionWrapper>
      <AnswerWrapper
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isVisible ? "auto" : 0, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <AnswerText>{answer}</AnswerText>
      </AnswerWrapper>
    </FAQContainer>
  );
}
