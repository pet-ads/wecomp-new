import styled from "styled-components";

import { SectionContent } from "../../../styles/SectionContainer";

export const DirectorContent = styled(SectionContent)`
  min-width: 80%;
  max-width: 80%;

  background: var(--gray-200);

  @media (min-width: 768px) {
    min-width: 70%;
    max-width: 70%;
  }

  @media (min-width: 1080px) {
    min-width: 65%;
    max-width: 65%;
  }

  @media (min-width: 1400px) {
    min-width: 60%;
    max-width: 60%;
  }

  @media (min-width: 2000px) {
    min-width: 45%;
    max-width: 45%;
  }
`;

export const DirectorsLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 2rem 0;

  margin: 5rem 0;

  gap: 2rem; // Reduzido de 3rem para 2rem no web

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    margin: 1rem 0;
    gap: 1.5rem; // Reduzido ainda mais no mobile
  }
`;


export const DirectorLogo = styled.img<{ width?: string }>`
  height: 100%;
  max-width: 10rem; 
  width: ${({ width }) => width || "20%"}; 
  object-fit: contain;
  overflow: hidden;

  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 8rem; // Diminuído no mobile
    width: 60%; // Ajustado para ocupar menos espaço no mobile
  }
`;