import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EventLogo = styled.img`
  min-width: 100%;
  max-width: 100%;

  max-height: 25vh;

  object-fit: contain;
`;

export const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0;

  font-size: 12.5pt;

  text-align: center;

  white-space: nowrap;

  ${mq({
    minWidth: ["60%", "60%", "80%"],
    maxWidth: ["60%", "60%", "80%"],
    padding: ["0.5rem 0", "0 1rem"],
  })}
`;

export const HighlightedText = styled.strong`
  font-size: larger;

  white-space: nowrap;
`;
