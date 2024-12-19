// External library
import styled from "styled-components";

export const SandWichIcon = styled.div`
  display: none;

  @media (max-width: 1035px) {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    right: 0;

    padding: 0 0.5rem;
  }
`;