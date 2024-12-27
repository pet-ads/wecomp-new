// External library
import styled from "styled-components";

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 1rem 0;

  gap: 2.5rem;

  list-style-type: none;

  @media (max-width: 1080px) {
    display: none;
  }

  @media (min-width: 1500px) {
    gap: 3rem;
  }
`;

export const NavigationItem = styled.li`
  text-align: center;
`;

export const NavigationLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;

  color: var(--secundary-text-color);

  cursor: pointer;

  @media (min-width: 1350px) {
    font-size: 1.25rem;
  }

`;
