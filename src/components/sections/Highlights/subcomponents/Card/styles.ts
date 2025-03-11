import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 100%;
  max-width: 100%;

  min-height: 100%;
  max-height: 100%;

  padding: 1.5rem;

  gap: 2rem;
  border-radius: 1rem;

  background-color: var(--primary-text-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.img``;
