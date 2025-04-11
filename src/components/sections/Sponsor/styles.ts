import styled from "styled-components";
import { motion } from "framer-motion";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const SupporterSection = styled(SectionContainer)``;

export const SupporterWrapper = styled(SectionContent)`
  min-width: 100%;
  max-width: 100%;
`;

export const SupporterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;

  padding: 2rem 0;
  margin: 1rem 0;

  gap: 3rem;

  overflow-x: hidden;
`;

export const SupporterLogo = styled.img<{ width?: string }>`
  width: ${({ width }) => width || "15rem"};

  object-fit: contain;
  overflow: hidden;

  margin-left: 3rem;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

export const MarqueeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  width: 100%;
  height: 20rem;

  white-space: nowrap;
  overflow: hidden;
  /* 
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 2%,
    black 30%,
    black 70%,
    rgba(0, 0, 0, 0) 100%
  ); */
`;

export const MarqueeItem = styled.div<{ isPaused: boolean }>`
  min-width: 100%;
  max-width: 100%;

  gap: 2rem;

  /* position: relative; */
  height: 5rem;
  animation: ${(props) =>
    props.isPaused ? "none" : "marquee 20s linear infinite"};

  &:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100rem);
    }
  }
`;
