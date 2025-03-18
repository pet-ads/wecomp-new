import styled from "styled-components";

import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const MarathonSection = styled(SectionContainer)``;

export const MarathonWrapper = styled(SectionContent)`
  padding: 2rem 0;
`;

export const MarathonSubtitle = styled.h2`
`
export const MarathonText = styled.div`
  width: 100%;

  margin: 2rem 0;

  text-align: justify;

  font-size: 12.5pt;

  @media (min-width: 768px) {
    width: 75%;
    font-size: 15pt;
  }
`;