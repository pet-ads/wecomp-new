// External Library
import styled from "styled-components";

// Styles
import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const LocalContainer = styled(SectionContainer)``;

export const LocalContent = styled(SectionContent)``;

export const MapsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  width: 100%;
  height: 25vh;

  padding: 2rem 0;
  margin: 2rem 0;

  background-color: purple;

  @media (max-width: 768px) {
    flex-direction: column;

    height: fit-content;

    gap: 5rem;
  }
`;

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 80%;

  background-color: red;

  @media (max-width: 768px) {
    width: 100%;

    height: 80%;
    min-height: 15vh;

    padding: 2rem 0;
  }
`;