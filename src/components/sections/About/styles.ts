import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";

export const PrologueText = styled.div`
  text-align: justify;

  ${mq({
    fontSize: ["10pt", "10pt", "12.5pt", "12.5pt", "12.5pt", "15pt"],
  })}

  @media (orientation: landscape) and (max-width: 930px) {
    font-size: 12pt;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
