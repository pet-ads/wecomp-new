import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  height: auto;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 60%;

  height: 100%;

  gap: 0.25rem;

  text-align: justify;

  @media (max-width: 768px) {
    align-items: center;

    width: 100%;
  }
`;

export const EventImage = styled.img`
  width: 25%;
  object-fit: cover; 
  border-radius: 0.5rem; 
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 30%;
    height: 30%;
    
  }
`;

export const EventDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EventSpeakers = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-1000);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;
