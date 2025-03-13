import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const ContactContainer = styled(SectionContainer)`
  background-color: var(--background-color);
`;

export const ContactContent = styled(SectionContent)`
  background-color: var(--background-color);
`;

export const ContactCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  min-width: 100%;
  max-width: 100%;

  min-height: 25vh;

  padding: 1rem 0;

  gap: 3rem;


  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
