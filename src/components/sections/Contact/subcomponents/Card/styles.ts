import { motion } from "framer-motion";
import { styled } from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  overflow: hidden;

  border-radius: 0.5rem;
  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  ${mq({
    width: [
      "2rem",
      "3.5rem",
      null,
      "6rem",
      null,
      null,
      null,
      "10rem",
      "12.5rem",
    ],
    height: [
      "2rem",
      "3.5rem",
      null,
      "6rem",
      null,
      null,
      null,
      "10rem",
      "12.5rem",
    ],
  })}
`;

export const SocialIcon = styled(motion.img)`
  object-fit: cover;

  ${mq({
    width: ["2rem", "2.5rem", "3rem", null, null, null, null, "4.5rem", "5rem"],
    height: [
      "2rem",
      "2.5rem",
      "3rem",
      null,
      null,
      null,
      null,
      "4.5rem",
      "5rem",
    ],
  })}
`;

export const NameContainer = styled.div`
  padding: 1rem;

  color: var(--gray-1000);
  font-size: 1rem;
  font-weight: bold;

  text-align: center;

  ${mq({
    display: [
      "none",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "block",
    ],
  })}
`;
