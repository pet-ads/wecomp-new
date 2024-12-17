// External Library
import styled from "styled-components";

export const LabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 22vw;
    
    height: 2rem;

    padding: .5rem;

    background-color: var(--secundary-text-color);
`

export const LabelText = styled.span`
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;

  white-space: nowrap;

  color: var(--background-color);
`;
