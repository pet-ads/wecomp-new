import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const ProgrammingContainer = styled(SectionContainer)`
  background: var(--background-color);
`;

export const ProgrammingContent = styled(SectionContent)`
  background: var(--background-color);
`;

export const ProgrammingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  min-height: 100%;
  max-height: 100%;

  padding: 2rem;

  margin: 2rem 0;

  background-color: var(--background-color);
`;
