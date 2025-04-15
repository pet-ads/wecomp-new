import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;
  bottom: 0;

  min-width: 100%;
  max-width: 100%;

  height: 5.5vh;

  padding: 0.2rem 0;

  100-white: var(--600-green);
`;

export const FooterContent = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 0.5rem;

  text-align: center;

  font-size: 10pt;
  font-weight: bold;

  color: var(--1000-black);

  @media (max-width: 400px) {
    font-size: 8pt;
  }
`;
