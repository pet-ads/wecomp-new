import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  gap: 1rem;

  ${mq({
    flexWrap: ["wrap", "wrap", "wrap", "wrap", "wrap", "wrap", "nowrap"],
  })}
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 50%;
  height: 100%;

  gap: 0.5rem;

  p {
    text-align: justify;
  }

  ${mq({
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "50%"],
    height: ["50%", "50%", "50%", "50%", "50%", "50%", "fit-content"],
    maxHeight: ["50%", "50%", "50%", "50%", "50%", "50%", "100%"],
    order: ["2", "2", "2", "2", "2", "2", "1"],
    alignItems: ["center", "center", "center", "center", "center", "start"],
  })}
`;

export const ScrollContainer = styled.div`
  overflow: auto;

  ${mq({
    height: ["45%", "45%", "45%", "45%", "45%", "45%", "100%"],
    maxHeight: ["45%", "45%", "45%", "45%", "45%", "45%", "100%"],
  })}
`;

export const MarathonImageWrapper = styled.div`
  width: 50%;
  height: 50%;
  overflow: hidden;

  border-radius: 0.5rem;

  ${mq({
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "50%"],

    order: ["1", "1", "1", "1", "1", "1", "2"],
  })}
`;

export const MarathonImage = styled(motion.img)`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 0.5rem;
`;
