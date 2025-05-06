import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const LogoList = styled.ul`
  display: flex;
  transition: transform 0.8s ease-in-out;
`;

export const LogoItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoFigure = styled.figure<{ isCenter?: boolean }>`
  text-align: center;
  cursor: pointer;
  opacity: 0.4;
  transform: scale(0.6);
  transition: all 0.5s ease-in-out;
  filter: grayscale(100%);

  ${({ isCenter }) =>
    isCenter &&
    css`
      opacity: 1;
      transform: scale(1);
      filter: none;
      z-index: 2;
    `}
`;

export const LogoImage = styled.img<{ width?: string }>`
  width: ${({ width }) => (width ? width : "7.5rem")};
  height: ${({ width }) => (width ? width : "7.5rem")};
  object-fit: contain;
  border-radius: 10px;
  transform: none;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const LogoCaption = styled.figcaption`
  margin-top: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;
