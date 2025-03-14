import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 12.5rem;
  height: 12.5rem;
  padding: 1rem;

  overflow: hidden;

  border-radius: 0.5rem;
  background-color: var(--primary-text-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  z-index: 2;


  width: 100%;
  height: 65%;

  padding: 1rem 0;

  background-color: var(--primary-text-color);
`;

export const SocialIcon = styled.img`
  width: 5rem;
  height: 5rem;

  z-index: 5;

  object-fit: cover;

  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const NameContainer = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  z-index: 1;

  padding: 0.5rem 1rem;

  color: var(--secundary-text-color);
  font-size: 1rem;
  font-weight: bold;

  text-align: center;
`;

