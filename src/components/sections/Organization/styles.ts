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
        "7rem",
        "7rem",
        "7rem",
        "8rem",
        "8.5rem",
        "9rem",
        width || "10rem",
      ],
    })}

  @media (max-width: 768px) {
    &[alt*="IFSP"] {
      width: 7.5rem !important;
    }
  }

  //   SUMMARY
  //   web responsive logos
  //   IFSP   ... width 10.5rem
  //   ONE SIX  ... width 4.5rem
  //   PET ADS  ... width 7rem

  @media (min-width: 769px) {
    &[alt*="IFSP"] {
      width: 13.5rem;
    }
    &[alt*="ONE SIX"] {
      width: 7.5rem;
    }
    &[alt*="PET ADS"] {
      width: 10rem;
    }
  }

  @media (orientation: landscape) and (max-width: 930px) {
    width: 7rem;
  }
`;
