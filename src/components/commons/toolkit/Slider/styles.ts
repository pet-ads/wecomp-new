import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const CarouselTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;

  gap: 2rem;

  padding: 1rem 0;

  cursor: grab;
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
