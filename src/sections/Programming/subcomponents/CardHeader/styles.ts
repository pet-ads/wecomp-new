import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  height: 100%;

  gap: 1rem;

  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 60%;

  gap: 0.5rem;

  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;

    gap: 1rem;
  }
`;

export const EventImage = styled.img`
  width: 25%;

  height: 25%;

  object-fit: cover;

  @media (max-width: 600px) {
    width: 40%;

    height: 40%;
  }
`;

export const EventTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;

  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
`;

export const EventDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const EventSpeakers = styled.div`
  font-size: 1rem;
  font-weight: 600;

  color: var(--secundary-text-color);
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
