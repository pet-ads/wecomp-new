// External Library
import styled from "styled-components";

// Styles
import { SectionContainer, SectionContent } from "../../styles/SectionContainer";

export const SupportesContainer = styled(SectionContainer)`
  height: 30rem;
`;

export const SupportesContent = styled(SectionContent)`
  max-width: 100%;
  min-width: 100%;
  height: 30rem;
  padding: 2rem 0;

`

export const SupportesLogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  height: 80%;

  gap: 3rem;

  background-color: purple;
`


export const SupporterLogo = styled.img`
  max-width: 15rem;
  width: 30%;
  object-fit: contain;

  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`