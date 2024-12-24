// External Library
import styled from "styled-components";

export const Container = styled.details`
  display: flex;

  min-width: 100%;

  min-height: 2rem;

  border: 1px solid var(--secundary-text-color);
  border-radius: .5rem;

  background-color: var(--primary-text-color);
`;

export const Content = styled.summary`
    padding: 1rem;
`;
