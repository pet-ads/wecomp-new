import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  width: max(calc(50% - 1rem), 25rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const MapFrame = styled.iframe`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;

  border-radius: 0.5rem;
  border: none;

  ${mq({
    height: ["5rem", "5rem", "5rem", "5rem", "5rem", "50%"],
  })}
`;

export const DetailsOfLocal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  ${mq({
    gap: ["1rem", null, null, null, null, ".5rem", ".25rem"],
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
