import styled from "styled-components";
import { mq } from "../../../../utils/responsive/breakpoints";

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--gray-1000);
  border-radius: 0.25rem;

  ${mq({
    width: ["15rem", "15rem", "20rem"],
    maxWidth: ["15rem", "15rem", "20rem"],
    height: ["1.5rem", "1.5rem", "2rem"],
    padding: ["1.15rem 0", "1.15rem 0", "1.35rem 0.5rem"],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    padding: 1.35rem 0;
  }
`;

export const LabelText = styled.span`
  font-weight: bold;
  white-space: nowrap;

  color: var(--gray-200);

  ${mq({
    fontSize: ["1rem", "1rem", "1.25rem"],
  })}
`;
