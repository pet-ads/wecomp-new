import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 35rem;
  max-width: 35rem;

  min-height: 30rem;
  max-height: 30rem;

  padding: 1.5rem;
  border-radius: 1rem;

  background-color: var(--primary-text-color);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.img``;


export const EventTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;

  max-width: 100%;
`;