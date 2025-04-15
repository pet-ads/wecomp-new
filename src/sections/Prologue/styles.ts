import styled from "styled-components";
import {
  SectionContainer,
  SectionContent,
} from "../../styles/SectionContainer";

export const PrologueContainer = styled(SectionContainer)`
  background: var(--background-color);
  position: relative;
`;

export const PrologueContent = styled(SectionContent)`
  background: var(--background-color);
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 85px;
  transform: translateX(-50%);
  
  font-size: 2rem;
  cursor: pointer;

  animation: bounce 1.5s infinite;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`;

