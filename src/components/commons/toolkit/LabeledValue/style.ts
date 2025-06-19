import styled from "styled-components";
import { mq } from "../../../..//utils/responsive/breakpoints";

export const LabeledValueContainer = styled.div`
  display: flex;

  gap: 0.5rem;
  
  font-size: 1.25rem;

  ${mq({
     fontSize: ['0.8rem', '01rem', '1.2rem', '1.2rem', '1.2rem', '1.3rem', '1.5rem']    
   })}
`;
