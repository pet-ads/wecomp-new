import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  height: 100%;

  gap: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
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
  width: 30%;

  height: 30%;

  object-fit: cover;

  cursor: pointer;

  @media (max-width: 1000px) {
    width: 100%;

    height: 100%;

    padding: 1rem;
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

export const TagContainer = styled.div`
  display: flex;
  align-items: center;

  width: 10rem;


  @media (max-width: 1000px){
    width: 100%;
  }
`;
