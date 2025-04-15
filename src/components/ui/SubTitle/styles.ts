import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  margin-bottom: 2rem;

  100-white: var(--1000-black);
  border-radius: 0.25rem;

  ${mq({
    minWidth: ["20vw", null, "22.5vw"],
    height: ["1.5rem", null, "2rem"],
  })}
`;

export const LabelText = styled.span`
  font-weight: bold;
  white-space: nowrap;

  color: var(--100-white);

  ${mq({
    fontSize: ["1rem", null, "1.5rem"],
  })}
`;
