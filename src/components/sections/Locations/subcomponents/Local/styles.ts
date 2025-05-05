import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  width: max(calc(50% - 1rem), 20rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  @media (orientation: landscape) and (max-width: 930px) {
    width: 100%;
    height: 100%;
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: none;

  ${mq({
    height: ["5rem", "5rem", "5rem", "5rem", "5rem", "12rem"],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    width: 100%;
    height: 5rem;
  }
`;

export const DetailsOfLocal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  ${mq({
    gap: [".75rem", ".75rem", ".75rem", ".75rem", ".75rem", ".5rem", ".25rem"],
  })}
`;

export const InformationSpan = styled.span`
  color: var(--gray-1000);
  font-size: 1rem;
  font-weight: bold;

  text-align: center;
`;

export const ComplementSpan = styled.span`
  color: var(--gray-1000);
  font-size: 0.9rem;

  text-align: center;
`;
