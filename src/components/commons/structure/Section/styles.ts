import styled from "styled-components";
import { mq } from "../../../../utils/responsive/breakpoints";

export interface ContainerProps {
  backgroundColor: string;
  $isLast?: boolean;
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 100vh;

  min-width: 100%;
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: ${({ $isLast }) => ($isLast ? "0rem" : "2rem 0rem")};

  background: ${({ backgroundColor }) => backgroundColor};
`;

export const Content = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: auto;

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
