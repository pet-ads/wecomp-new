import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 10;

  min-width: 100%;

  min-height: 2.5rem;

  padding: 0.5rem 0;

  gap: 2rem;

  background-color: var(--primary-color);
`;
