import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const DirectorLogo = styled.img<{ width?: string }>`
  height: fit-content;

  width: ${({ width }) => width || "10rem"};

  object-fit: contain;
  overflow: hidden;

  cursor: pointer;
`;
