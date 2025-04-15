import styled from "styled-components";

<<<<<<< HEAD:src/components/sections/Editions/styles.ts
import { SectionContent } from "../../../styles/SectionContainer";
=======
import {
  SectionContainer,
  SectionContent,
} from "../../styles/SectionContainer";

export const EditionsContainer = styled(SectionContainer)`
  background-color: var(--background-color);
`;
>>>>>>> development:src/sections/Editions/styles.ts

export const EditionsContent = styled(SectionContent)`
  background-color: var(--background-color);
`;

export const EditionsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  max-height: 40vh;
`;
