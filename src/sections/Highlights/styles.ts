import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../styles/SectionContainer";

export const HighlightsContainer = styled(SectionContainer)`
  background-color: var(--background-color);
`;

export const HighlightsContent = styled(SectionContent)`
  background-color: var(--background-color);
`;

export const HighlightsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  min-height: 40vh;
`;
