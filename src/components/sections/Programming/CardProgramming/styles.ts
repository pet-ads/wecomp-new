// External library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
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
  background-color: var(--primary-text-color);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 1rem;
    aspect-ratio: auto;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const VacanciesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  gap: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
`;

export const AuthorContainer = styled.div`
  display: inline-block;
`;

export const StatusInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StatusContainer = styled.div``;

export const ClassificationContainer = styled.div``;
