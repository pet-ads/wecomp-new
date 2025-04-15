import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  max-width: 100%;

  min-height: 7.5rem;
  max-height: 7.5rem;

  margin-top: .5rem;

  overflow-y: auto;

  text-align: justify;

  @media (max-width: 768px) {
    min-height: 5rem;
    max-height: 5rem;
  }
`;
