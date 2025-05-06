import styled from "styled-components";
import { mq } from "../../../../utils/responsive/breakpoints";

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  max-width: 100%;

  height: 3.25rem;

  padding: 0.5rem 0;

  gap: 2rem;

  background-color: var(--green-700);

  ${mq({
    height: [
      "2.75rem",
      "2.75rem",
      "2.75rem",
      "2.75rem",
      "2.75rem",
      "2.75rem",
      "2.5rem",
      "2.75rem",
      "3rem",
    ],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    height: 2.5rem;
  }
`;
