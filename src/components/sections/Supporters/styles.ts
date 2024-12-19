// External Library
import styled from "styled-components";

// Styles
import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const SupportesContainer = styled(SectionContainer)``;

export const SupportesContent = styled(SectionContent)`
  min-width: 100%;
  max-width: 100%;
`;

export const SupportesLogoContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 80%;

  padding: 2rem 0;
  margin: 1rem 0;

  gap: 3rem;

  overflow-x: hidden;

  background-color: purple;
`;

export const SupporterLogo = styled.img`
  max-width: 15rem;
  width: 30%;
  object-fit: contain;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 30%;
  }
`;
