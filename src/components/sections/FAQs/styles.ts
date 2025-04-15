import styled from "styled-components";

import { SectionContent } from "../../../styles/SectionContainer";

export const FAQContent = styled(SectionContent)`
  100-white: var(--100-white);

  height: 100vh;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-height: 100%;

  overflow-y: auto;

  padding: 2rem 1rem;

  gap: 1rem;
`;
