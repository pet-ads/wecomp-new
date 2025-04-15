import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  height: 100%;

  gap: 1rem;

  @media (max-width: 675px) {
    flex-direction: column-reverse;

    gap: 1rem;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 60%;

  gap: 0.5rem;

  text-align: justify;

  @media (max-width: 1000px) {
    align-items: center;
    width: 100%;

    gap: 1rem;
  }
`;

export const EventImage = styled.img`
  width: 25%;

  height: 25%;

  object-fit: cover;

  @media (max-width: 768px) {
    width: 30%;

    height: 30%;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  @media (max-width: 675px) {
    justify-content: center;
  }
`;
