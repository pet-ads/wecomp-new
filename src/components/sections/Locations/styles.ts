import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const LocalContainer = styled(SectionContainer)`
    background-color: var(--primary-text-color);
`;

export const LocalContent = styled(SectionContent)`
    background-color: var(--primary-text-color);
`;

export const MapsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 25vh;

  padding: 2rem 0;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;

    height: fit-content;

    gap: 1rem;

    padding: 0;
    margin: 2rem 0;
  }
`;

