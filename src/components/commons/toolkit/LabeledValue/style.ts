import styled from "styled-components";
import { mq } from "../../../..//utils/responsive/breakpoints";

export const LabeledValueContainer = styled.div`
  display: flex;

  gap: 0.5rem;
  
  font-size: 1.25rem;

  ${mq({
    fontSize: ["0.6rem", "0.6rem", "0.6rem", "0.7rem", "0.7rem", "0.9rem", "1rem"],
  })}
`;
