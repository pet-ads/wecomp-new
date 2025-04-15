import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-width: 35rem;
  max-width: 35rem;

  min-height: 32.5rem;
  max-height: 32.5rem;

  padding: 1.5rem;

  border-radius: 1rem;

  100-white: var(--200-white);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    min-width: 65vw;
    max-width: 65vw;

    min-height: 65vh;
    max-height: 65vh;
  }

  @media (max-width: 375px) {
    min-width: 65vw;
    max-width: 65vw;

    min-height: 70vh;
    max-height: 70vh;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`;

export const Icon = styled.img``;

export const EventTitle = styled.div`
  max-width: 100%;
  
  height: auto;

  font-size: 1.25rem;
  font-weight: bold;

  text-align: justify;
`;
