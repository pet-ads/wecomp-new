import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: 768px) {
    gap: .5rem;
  }
`;

export const MapFrame = styled.iframe`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 12.5rem;

  border-radius: .5rem;
  border: none;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 320px) {
    height: 6.5rem;
  }
`;

export const DetailsOfLocal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 1rem;

  @media (max-width: 768px) {
    gap: .5rem;
  }
`;

export const InformationSpan = styled.span`
  color: var(--secundary-text-color);
  font-size: 1rem;
  font-weight: bold;

  text-align: center;
`;
