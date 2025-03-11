import styled from "styled-components";

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 22vw;

  height: 2rem;

  padding: 0.5rem;

  background-color: var(--secundary-text-color);

  @media (max-width: 400px) {
    min-width: 20vw;

    height: 1.5rem;
  }
`;

export const LabelText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  white-space: nowrap;

  color: var(--background-color);

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
