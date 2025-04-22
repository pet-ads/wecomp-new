import styled from "styled-components";
import { mq } from "../../../../utils/responsive/breakpoints";

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;

  padding: 0.5rem;

  background-color: var(--gray-1000);
  border-radius: 0.25rem;

  ${mq({
    height: ["1.5rem", null, "2rem"],
  })}
`;

export const LabelText = styled.span`
  font-weight: bold;
  white-space: nowrap;

  color: var(--gray-200);

  ${mq({
    fontSize: ["1rem", null, "1.5rem"],
  })}
`;
