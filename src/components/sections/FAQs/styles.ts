import styled from "styled-components";

import { SectionContent } from "../../../styles/SectionContainer";

export const FAQContent = styled(SectionContent)`
  background-color: var(--gray-200);

  height: 100vh;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 45rem);
  max-height: calc(100vh - 45rem);

  overflow-y: auto;

  padding: 1rem;

  gap: 1rem;
`;
