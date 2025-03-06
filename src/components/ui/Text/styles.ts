import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;

  min-width: 60%;

  height: auto;

  padding: 2rem 1rem;

  overflow-wrap: break-word;

  text-align: justify;

  font-size: 1rem;

  color: var(--secundary-text-color);

  @media (max-width: 380px) {
    font-size: 0.8rem;
  }
`;
