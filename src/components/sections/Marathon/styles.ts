import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  ${mq({
    flexWrap: ["wrap", "wrap", "wrap", "wrap", "wrap", "wrap", "nowrap"],
    gap: ["1rem", "1rem", "1rem", "1rem", "1rem", "1rem", "5rem"],
  })}
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 55%;
  height: 100%;

  gap: 0.5rem;

  ${mq({
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "55%"],
    height: ["55%", "55%", "55%", "55%", "55%", "55%", "fit-content"],
    maxHeight: ["55%", "55%", "55%", "55%", "55%", "55%", "100%"],
    order: ["2", "2", "2", "2", "2", "2", "1"],
    alignItems: ["center", "center", "center", "center", "center", "start"],
  })}
`;

export const ScrollContainer = styled.div`
  width: 100%;

  ${mq({
    height: ["55%", "55%", "55%", "55%", "55%", "55%", "100%"],
    maxHeight: ["55%", "55%", "55%", "55%", "55%", "55%", "100%"],
  })}

  p {
    text-align: justify;
  }
`;

export const MarathonImageWrapper = styled.div`
  width: 40%;
  height: 40%;
  overflow: hidden;

  border-radius: 0.5rem;

  ${mq({
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "40%"],
    order: ["1", "1", "1", "1", "1", "1", "2"],
  })}
`;

export const MarathonImage = styled(motion.img)`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 0.5rem;
`;
