// External Library
import styled from "styled-components";

// Styles
import { SectionContainer, SectionContent } from "../../styles/SectionContainer";

export const PrologueContainer = styled(SectionContainer)`
`;

export const PrologueContent = styled(SectionContent)`
  height: 50vh;

  padding: 2rem 0;

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 70vh;
  }

  @media (max-width: 375px) {
    height: 80vh;
  }
`

export const ProloqueButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  margin-left: 2rem;
`