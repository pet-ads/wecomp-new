import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${mq({
    gap: [".5rem", null, null, null, "2rem", null],
  })}
`;

export const MapFrame = styled.iframe`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25rem;

  border-radius: 0.5rem;
  border: none;

  ${mq({
    maxWidth: ["100%", null, null, null, "25rem", null],
  })}

  ${mq({
    height: ["6.5rem", null, null, null, "12.5rem", null],
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
  color: var(--secundary-text-color);
  font-size: 1rem;
  font-weight: bold;

  text-align: center;
`;

export const ComplementSpan = styled.span`
  color: var(--secundary-text-color);
  font-size: 0.9rem;

  text-align: center;
`;
