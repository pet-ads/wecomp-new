import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  min-width: 100%;

  min-height: 100vh;
  max-height: 100vh;

  background-color: var(--primary-color);
`;

export const EventLogo = styled.img`
  min-width: 80%;
  max-width: 80%;

  min-height: 25vh;
  max-height: 25vh;

  object-fit: contain;
`;

export const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 60%;
  max-width: 60%;

  padding: 0.5rem 0;

  font-size: 12.5pt;

  text-align: center;

  white-space: nowrap;

  @media (max-width: 400px) {
    min-width: 80%;
    max-width: 80%;

    padding: 0 1rem;
  }
`;

export const HighlightedText = styled.strong`
  font-size: larger;

  white-space: nowrap;
`;
