import { motion } from "framer-motion";
import styled from "styled-components";

export const SliderWrapper = styled.div`
  margin: 0px; 
  overflow:hidden; 
  height: 100%;
  padding-top: constant(safe-area-inset-top); 
  padding-top: env(safe-area-inset-top); 
  padding-bottom: constant(safe-area-inset-bottom); 
  padding-bottom: env(safe-area-inset-bottom);
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
