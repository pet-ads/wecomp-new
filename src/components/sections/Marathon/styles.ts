import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  ${mq({
    flexWrap: [
      "wrap-reverse",
      "wrap-reverse",
      "wrap-reverse",
      "wrap-reverse",
      "wrap-reverse",
      "wrap-reverse",
      "nowrap",
    ],
    gap: ["1rem", "1rem", "1rem", "1rem", "1rem", "1rem", "2rem"],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    flex-flow: row nowrap;
  }
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 55%;
  height: 100%;
  max-height: 100%;

  ${mq({
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "55%"],
    height: ["55%", "55%", "55%", "55%", "55%", "55%", "fit-content"],
    maxHeight: ["55%", "55%", "55%", "55%", "55%", "55%", "100%"],
    alignItems: [
      "center",
      "center",
      "center",
      "center",
      "center",
      "center",
      "start",
    ],
    gap: ["2rem", "2rem", "2rem", "2rem", "2rem", "2rem", "2rem", "2rem"],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    width: 100%;
    justify-content: center;
    align-items: start;

    gap: 1.5rem;

    h2 {
      font-size: 12pt;
    }
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;

  ${mq({
    height: ["55%", "55%", "55%", "55%", "55%", "55%", "100%"],
    maxHeight: ["55%", "55%", "55%", "55%", "55%", "55%", "100%"],
  })}

  p {
    text-align: justify;
    ${mq({
      fontSize: [
        "10pt",
        "10pt",
        "10pt",
        "10pt",
        "12.5pt",
        "12.5pt",
        "12.5pt",
        "12.5pt",
      ],
    })}
  }

  @media (orientation: landscape) and (max-width: 930px) {
    p {
      font-size: 10pt;
    }
  }
`;

export const MarathonImageWrapper = styled.div`
  width: 40%;
  height: 40%;
  overflow: hidden;

  border-radius: 0.5rem;

  ${mq({
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "40%"],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    width: 50%;
    height: 50%;
  }
`;

export const MarathonImage = styled(motion.img)`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 0.5rem;
`;
