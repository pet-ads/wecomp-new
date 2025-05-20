import styled from "styled-components";
import { mq } from "../../../..//utils/responsive/breakpoints";

export const LabeledValueContainer = styled.div`
  display: flex;

  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.25rem;

  ${mq({  
          fontSize: ["0.75rem", "0.90rem", "0.925", "0.95rem", "1rem", "1.1rem", "1.25rem"],
        })}
`;
