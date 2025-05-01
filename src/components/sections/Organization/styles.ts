import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const GroupsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem; 
  flex-wrap: wrap; 
`;

export const DirectorLogo = styled.img<{ width?: string }>`
  height: fit-content;

  width: ${({ width }) => width || "15rem"};

  object-fit: contain;
  overflow: hidden;

  cursor: pointer;
`;
