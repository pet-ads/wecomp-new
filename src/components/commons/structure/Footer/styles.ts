import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  bottom: 4.5rem;

  z-index: 2;

  min-width: 100%;
  max-width: 100%;

  height: 5.5vh;

  padding: 0.2rem 0;

  background-color: var(--gray-200);
`;

export const FooterContent = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 0.5rem;

  text-align: center;

  font-size: 10pt;
  font-weight: bold;

  color: var(--gray-1000);

  @media (max-width: 400px) {
    font-size: 8pt;
  }
`;
