import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;
  min-width: 90%;
  max-width: 90%;

  height: fit-content;
  min-height: 90%;
  max-height: 90%;

  margin: 5%;

  padding: 1rem 2rem;

  gap: 1rem;

  border-radius: 1rem;
  border: 2px solid black;

  background-color: var(--white-100);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  overflow: hidden;
`;

export const Title = styled.h2``;

export const Description = styled.p``;

export const InfoContainer = styled.div`
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: auto;
`;

export const LinkButtonContainer = styled.a`
  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 8rem;
  max-width: 8rem;

  min-height: 2.5rem;
  max-height: 2.5rem;

  padding: 0.5rem 1rem;

  background-color: var(--green-700);
  color: var(--white-100);

  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  transition: opacity 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }

  &:focus {
    outline: 3px solid var(--focus-outline-color);
    outline-offset: 2px;
  }

  @media (max-width: 80px) {
    min-width: 6rem;
    max-width: 6rem;

    min-height: 2rem;
    max-height: 2rem;

    font-size: 0.75rem;

    white-space: nowrap;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const VacanciesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;

  min-width: 8rem;
  max-width: 8rem;

  min-height: 2.5rem;
  max-height: 2.5rem;

  padding: 0.5rem 1rem;

  background-color: var(--green-700);
  color: var(--white-100);

  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  transition: opacity 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: 85%;
  }

  &:focus {
    outline: 3px solid var(--focus-outline-color);
    outline-offset: 2px;
  }

  @media (max-width: 80px) {
    min-width: 6rem;
    max-width: 6rem;

    min-height: 2rem;
    max-height: 2rem;

    font-size: 0.75rem;

    white-space: nowrap;
  }
`;
