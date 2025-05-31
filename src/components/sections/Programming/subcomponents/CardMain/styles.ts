import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  max-width: 100%;

  min-height: 5rem;
  max-height: 5rem;

  margin-top: 1rem;

  overflow-y: auto;

  text-align: justify;

  @media (max-height: 750px) and (min-width: 600px) and (min-height: 769px) {
    width: 100%;
    min-height: 2rem;
    max-height: 2rem;
  }

  @media (max-height: 684px) {
    width: 100%;
    min-height: 4.3rem;
    max-height: 4.3rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    min-height: 6rem;
    max-height: 6rem;
  }
`;
