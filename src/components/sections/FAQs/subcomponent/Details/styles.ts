import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: auto;

  border-radius: 0.5rem;

  background-color: var(--primary-text-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  transition: height 0.3s ease-in-out;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  cursor: pointer;
`;

export const AnswerContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  max-height: ${({ isVisible }) => (isVisible ? "auto" : "0")};


  background-color: var(--primary-text-color);

  overflow: hidden;
`;


export const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .5rem;

  font-size: 2rem;
  cursor: pointer;
`;
