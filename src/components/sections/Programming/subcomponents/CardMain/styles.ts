import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  max-width: 100%;

  min-height: 7.25rem;
  max-height: 7.25rem;

  margin-top: 0.5rem;

  overflow-y: auto;

  text-align: justify;

  @media (max-width: 768px) {
    min-height: 5rem;
    max-height: 5rem;
  }
`;
