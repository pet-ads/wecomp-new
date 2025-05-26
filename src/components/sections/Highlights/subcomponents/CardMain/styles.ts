import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 100%;
  max-width: 100%;


  margin-top: 0.5rem;

  overflow-y: auto;


  @media (max-width: 768px) {
    min-height: 5rem;
  }
`;
