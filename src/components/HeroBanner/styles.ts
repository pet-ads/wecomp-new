import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  max-width: 100%;


  min-height: 60vh;
  max-height: 60vh;

  background-color: var(--primary-color);
`;

export const EventLogo = styled.img`
  min-width: 80%;
  max-width: 80%;

  min-height: 20vh;
  max-height: 20vh;

  object-fit: contain;
`;

export const EventDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-width: 60%;
    max-width: 60%;

    padding: .5rem 0;

    font-size: 12.5pt;

    text-align: center;
`

export const HighlightedText = styled.strong`
  font-size: larger;
`