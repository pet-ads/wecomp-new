import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

`

export const GroupsContainer = styled.div`
  width: 100%;
  height: 100%;

  
  display: flex;
  justify-content: space-around;
  align-items: center; 
  gap: 2rem;
`;

export const DirectorLogo = styled.img<{ width?: string }>`
  height: fit-content;

  width: ${({ width }) => width || "15rem"};

  object-fit: contain;
  overflow: hidden;
  
  cursor: pointer;
`;
