import styled from "styled-components";
import { motion } from "framer-motion";

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

  font-size: 2rem;
  cursor: pointer;
`;

export const QuestionText = styled.div`
  max-width: 100%;

  padding: 1rem;

  text-align: justify;

  font-size: 12.5pt;
  font-weight: bold;

  @media (max-width: 320px) {
    font-size: 10pt;
  }
`;

export const AnswerText = styled.div`
  max-width: 100%;

  padding: 1rem;

  text-align: justify;
  font-size: 12.5pt;

  @media (max-width: 320px) {
    font-size: 10pt;
  }
`;
