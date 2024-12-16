// External library
import styled from "styled-components";

export const NavigationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: fixed;
  z-index: 10;

  width: 100%;

  gap: 2rem;

  list-style-type: none;
  letter-spacing: 3px;

`;

export const NavigationItem = styled.li`
  text-align: center;

`;

export const NavigationLink = styled.a`
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;

    color: var(--secundary-text-color);
`