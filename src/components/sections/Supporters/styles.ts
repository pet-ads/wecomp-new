// External Library
import styled from "styled-components";
import { motion } from "framer-motion";

// Styles
import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const SupportesContainer = styled(SectionContainer)`
  background: var(--background-color);
`;

export const SupportesContent = styled(SectionContent)`
  min-width: 100%;
  max-width: 100%;
  background: var(--background-color);
`;

export const SupportesLogoContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 100%;

  padding: 2rem 0;
  margin: 1rem 0;

  gap: 3rem;

  overflow-x: hidden;
`;

export const SupporterLogo = styled.img<{width?: string}>`
  height: 100%;
  max-width: 15rem;
  width: ${({width}) => width || "30%"};
  object-fit: contain;
  overflow: hidden;
  margin-left: 4rem;
  margin-bottom: 1rem;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 30%;
  }
`;

export const MarqueeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 100%;

  white-space: nowrap;
  overflow: hidden;

  font-size: 5rem;
  font-weight: bold;
`;

export const MarqueeItem = styled.div`
  position: relative;

  gap: 5rem;

  font-size: 5rem;
  font-weight: bold;

  animation: marquee 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(-1.5%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
