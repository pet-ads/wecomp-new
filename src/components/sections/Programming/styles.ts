// External Library
import styled from "styled-components";

// Styles
import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const ProgrammingContainer = styled(SectionContainer)`
background: var(--background-color);`;

export const ProgrammingContent = styled(SectionContent)`
background: var(--background-color);
`;

export const ProgrammingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  min-height: 40vh; 

  padding: 2rem 0;

  margin: 2rem 0;
  
  background-color: var(--background-color);
`;
