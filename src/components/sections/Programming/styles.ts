import styled from "styled-components";

export const ProgrammingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 80%;
  max-width: 80%;

  height: 100%;

  background: var(--background-color);

  overflow-wrap: break-word;
  line-height: 1.6;
`;

export const ProgrammingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  min-height: 100%;
  max-height: 100%;

  background-color: var(--background-color);
`;
