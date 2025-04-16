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

  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

export const AbertoContainer = styled.div`
  top: 20vh;
  z-index: 100;
  width: auto;
  max-height: 25rem;
  height: auto;
  left: 300px;
  overflow: auto;
  right: 300px;
  padding: 1rem 1rem 0 1rem;
  position: fixed;
  box-sizing: border-box;
  background-color: var(--white-100);

  @media (max-width: 768px) {
    max-width: 100vw;
    min-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
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

  color: var(--gray-1000);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.img``;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
