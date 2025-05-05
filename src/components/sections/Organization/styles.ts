import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  ${mq({
    flexDirection: [
      "column",
      "column",
      "column",
      "column",
      "column",
      "column",
      "row",
    ],
  })}

  @media (orientation: landscape) and (max-width: 932px) {
    flex-direction: row;
  }
`;

export const LabelGroup = styled.h2``;

export const Content = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const DirectorWrapper = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const DirectorLogo = styled.img<{ width?: string }>`
  height: 100%;

  object-fit: contain;
  overflow: hidden;

  cursor: pointer;

  ${({ width }) =>
    mq({
      width: [
        "6rem",
        "6rem",
        "6rem",
        "7rem",
        "7.5rem",
        "8rem",
        width || "18rem",
      ],
    })}

  @media (orientation: landscape) and (max-width: 930px) {
    width: 8rem;
  }
`;
