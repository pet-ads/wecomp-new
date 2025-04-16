import styled from "styled-components";

import { SectionContent } from "../../../styles/SectionContainer";

export const ContactContent = styled(SectionContent)`
  background-color: var(--background-color);
`;

export const ContactCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  min-width: 100%;
  max-width: 100%;

  max-height: 100%;

  gap: 1rem;
`;
