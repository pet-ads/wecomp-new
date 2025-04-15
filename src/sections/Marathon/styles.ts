import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";
import { motion } from "framer-motion";

import {
  SectionContainer,
  SectionContent,
} from "../../styles/SectionContainer";

export const MarathonContainer = styled(SectionContainer)`
  background: var(--background-color);
`;

export const MarathonContent = styled(SectionContent)`
  background: var(--background-color);
  padding-top: 1rem;
`;

export const MarathonCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  min-width: 80%;
  max-width: 80%;

  height: 100%;

  border-radius: 0.5rem;

  padding: 1rem 0;

  margin: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MarathonCard = styled.div`
  background: rgb(255, 255, 255);
  padding: 2.5rem;

  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  text-align: center;

  max-width: 550px;
  width: 100%;

  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 90%;
  }
`;

  height: auto;

export const MarathonCardTitle = styled.h2`
  display: flex;
  font-size: 28px;
  font-weight: bold;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

  text-align: justify;
  font-size: 22px;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const MarathonSubtitle = styled.h2``;

  background-color: var(--secundary-text-color);
  color: white;

  border-radius: 4px;

  transition: background 0.3s;

  &:hover {
    background-color: var(--background-color);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
  }
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

  tr + tr {
    border-top: 1px solid #ddd;
  }

  td:nth-child(even) {
    border-left: 1px solid #ddd;
  }

  tr:first-child {
    font-weight: bold;
    background-color: rgb(255, 255, 255);
  }

  @media (max-width: 768px) {
    td {
      padding: 6px;
    }
  }
`;
