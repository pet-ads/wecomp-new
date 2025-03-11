import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const ContactContainer = styled(SectionContainer)``;

export const ContactContent = styled(SectionContent)``;

export const ContactCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  min-width: 100%;
  max-width: 100%;

  height: fit-content;
  min-height: 20vh;

  padding: 1rem 0;

  gap: 3rem;

  background-color: brown;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 9.5rem;

  min-height: 7.5rem;

  border: 1px solid var(--secundary-text-color);
  border-radius: 0.5rem;

  background-color: var(--primary-text-color);

  @media (max-width: 400px) {
    min-width: 8.5rem;

    min-height: 6.5rem;
  }
`;
