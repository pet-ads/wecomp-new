import styled from "styled-components";
import { mq } from "../../../../utils/responsive/breakpoints";
export interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 100vh;

  min-width: 100%;
  min-height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;

  background: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled.div`
  height: 60%;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 2.5rem;

  gap: 1rem;

  ${mq({
    width: [
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "80%",
      "60%",
    ],
  })}
`;
