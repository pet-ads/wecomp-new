import { motion } from "framer-motion";
import { styled } from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  padding: 1rem;

  overflow: hidden;

  border-radius: 0.5rem;
  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  ${mq({
    width: ["8rem", "8rem", "8rem", "8rem", "8rem", "8rem", "15rem"],
    height: ["8rem", "8rem", "8rem", "8rem", "8rem", "8rem", "15rem"],
  })}
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  z-index: 2;

  width: 100%;
  height: 80%;

  padding: 1rem 0;

  background-color: var(--white-100);
`;

export const EditionIcon = styled.img`
  z-index: 5;
  object-fit: cover;

  ${mq({
    width: ["4.5rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem", "4.5rem", "6rem"],
    height: [
      "4.5rem",
      "4.5rem",
      "4.5rem",
      "4.5rem",
      "4.5rem",
      "4.5rem",
      "6rem",
    ],
  })}
`;

export const NameContainer = styled(motion.div)<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: ${({ isVisible }) => (isVisible ? "0" : "10")};

  position: absolute;
  bottom: 1rem;

  white-space: nowrap;

  padding: 0.5rem 1rem;

  color: var(--gray-1000);
  font-size: 1rem;
  font-weight: bold;

  text-align: center;
`;
