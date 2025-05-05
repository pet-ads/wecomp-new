import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap: 2rem;

  @media (orientation: landscape) and (max-width: 930px) {
    flex-wrap: nowrap;
  }
`;
