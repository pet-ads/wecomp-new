// External Library
import styled from "styled-components";

export const Description = styled.p`
  width: 100%;
  height: 3rem;

  overflow-y: auto;

  text-align: justify;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
`;

export const Container = styled.div``;