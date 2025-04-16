import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-width: 30rem;
  max-width: 30rem;

  min-height: 25rem;
  max-height: 25rem;

  padding: 3rem 1.5rem;

  gap: 2rem;
  border-radius: 1rem;

  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  @media (max-width: 675px) {
    min-width: 20rem;
    max-width: 20rem;

    min-height: 30rem;
    max-height: 30rem;
  }

  @media (max-width: 500px) {
    min-width: 15rem;
    max-width: 15rem;

    min-height: 30rem;
    max-height: 30rem;
  }

  @media (max-width: 380px) {
    min-width: 12.5rem;
    max-width: 12.5rem;

    min-height: 35rem;
    max-height: 35rem;
  }

  @media (max-width: 320px) {
    min-height: 26rem;
    max-height: 26rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.img``;

export const EventTitle = styled.div`
  max-width: 100%;

  font-size: 1.25rem;
  font-weight: bold;

  text-align: justify;
`;
