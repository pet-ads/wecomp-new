import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";
import { motion } from "framer-motion";

export const MarathonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  min-width: 80%;
  max-width: 80%;

  height: 100%;

  border-radius: 0.5rem;

  overflow-wrap: break-word;
`;

export const MarathonText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: auto;

  gap: 0.5rem;

  text-align: justify;

  ${mq({
    width: ["100%", null, null, null, null, null, "60%"],
    fontSize: ["8pt", null, "9pt", null, null, "10pt"], // diminuiu aqui
    order: ["2", null, null, null, null, null, "1"],
    alignItems: ["center", null, null, null, null, "start"],
  })}
`;


export const MarathonSubtitle = styled.h2``;

export const MarathonTextContent = styled.p`
  width: 95%;
  height: 100%;
`;

export const MarathonImageWrapper = styled.div`
  overflow: hidden;

  ${mq({
    width: ["100%", null, null, null, null, null, "40%"],
    height: ["8rem", null, "10rem", null, "12rem", null, "15rem"],
    marginBottom: ["1rem", null, null, null, null, "0"],
    order: ["1", null, null, null, null, null, "2"],
  })}
`;

export const MarathonImage = styled(motion.img)`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 0.5rem;
`;
