import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)``;

export const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 0;
  left: 0.5rem;

  min-height: 12.5vh;

  padding: 1rem;

  gap: 1rem;

  border-radius: 1rem 0 0 1rem;

  list-style-type: none;

  background-color: var(--secundary-color);
`;

export const DropDownRow = styled.li`
  text-align: center;
`;

export const DropDownLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  color: var(--secundary-text-color);
  cursor: pointer;
`;
