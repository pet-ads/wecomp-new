// External library
import styled from "styled-components";

export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;

  position: fixed;
  top: 0;

  width: 100%;

  padding: 1rem 0;

  gap: 1.5rem;

  list-style-type: none;
  letter-spacing: 3px;

  @media (max-width: 1035px) {
    display: none;
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
`;
