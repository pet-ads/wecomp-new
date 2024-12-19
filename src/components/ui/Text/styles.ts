// External Library
import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;

  min-width: 60%;

  height: auto;

  padding: 2rem 1rem;

  overflow-wrap: break-word;

  text-align: justify;

  font-size: 15pt;
  font-weight: lighter;

  color: var(--secundary-text-color);

  @media (max-width: 380px) {
    font-size: 12.5pt;
  }

`;