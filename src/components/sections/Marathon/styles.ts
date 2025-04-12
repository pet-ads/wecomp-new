import styled from "styled-components";

import { SectionContent } from "../../../styles/SectionContainer";

export const MarathonWrapper = styled(SectionContent)`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MarathonText = styled.div`
  width: 100%;
  margin: 1rem 0;
  text-align: justify;
  font-size: 12.5pt;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 15pt;
  }
`;

export const MarathonImageWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: 40%;
    height: auto;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const MarathonSubtitle = styled.h2``;
