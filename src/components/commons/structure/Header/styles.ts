import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  max-width: 100%;

  height: 2.5rem;

  padding: 0.15rem 0;

  gap: 2rem;

  background-color: var(--green-700);
`;
