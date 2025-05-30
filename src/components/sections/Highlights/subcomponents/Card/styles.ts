import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 0.5rem;

  height: 100%;
  min-width: 35rem;
  max-width: 35rem;

  padding: 1.5rem;

  border-radius: 1rem;

  background-color: var(--white-100);
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

export const EventImage = styled.img`
  width: 25%;

  height: fit-content;

  object-fit: cover;

  @media (max-width: 768px) {
    width: 30%;

    height: 30%;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerIconTag = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`
