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

export const LabelGroup = styled.h2`
  margin-top: 1.25rem;
`;

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
  margin-top: 1.5rem;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
  cursor: pointer;

  ${({ width }) =>
    mq({
      width: [
        "5rem",
        "5rem",
        "5rem",
        "6rem",
        "6.5rem",
        "7rem",
        width || "8rem",
      ],
    })}

  @media (max-width: 768px) {
    &[alt*="IFSP"] {
      width: 5.5rem !important;
    }
  }

  @media (min-width: 769px) {
    &:first-of-type {
      width: 9rem;
    }
    &:last-of-type {
      width: 6rem;
    }
  }

  @media (orientation: landscape) and (max-width: 930px) {
    width: 7rem;
  }
`;
