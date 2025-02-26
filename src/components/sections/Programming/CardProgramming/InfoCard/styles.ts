// External library
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
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

export const InfoContainer = styled.div`
  margin-bottom: 1rem; 
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StatusInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StatusContainer = styled.div``;

export const ClassificationContainer = styled.div``;
