import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const EditionsContainer = styled(SectionContainer)`
  background-color: var(--background-color);
`;

export const EditionsContent = styled(SectionContent)`
  background-color: var(--background-color);
`;

export const EditionsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  max-height: 40vh;

  padding: 2rem 0;

  margin: 2rem 0;
`;
