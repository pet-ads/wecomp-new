import styled from "styled-components";
import { motion } from "framer-motion";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: auto;

  border-radius: 0.5rem;

  background-color: var(--primary-text-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  transition: height 0.3s ease-in-out;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  cursor: pointer;
`;

export const AnswerWrapper = styled(motion.div)`
  width: 100%;

  background-color: var(--primary-text-color);

  border-radius: 0.5rem;

  overflow: hidden;
`;

export const ToggleIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  font-size: 1.5rem;
  cursor: pointer;
`;

export const QuestionText = styled.div`
  max-width: 100%;

  padding: 1rem;

  text-align: justify;

  font-weight: bold;

  ${mq({
    fontSize: ["12.5pt", "10pt"],
  })}
`;

export const AnswerText = styled.div`
  max-width: 100%;

  padding: 1rem;

  text-align: justify;

  ${mq({
    fontSize: ["12.5pt", "10pt"],
    height: ["5rem", "3rem"],
    minHeight: ["5rem", "3rem"],
    maxHeight: ["5rem", "3rem"],
  })}
`;
