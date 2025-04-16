import styled from "styled-components";
import { mq } from "../../../utils/responsive/breakpoints";

export const PrologueText = styled.div`
  text-align: justify;

  ${mq({
    width: ["90%", null, null, "85%", null, "60%", "50%"],
    fontSize: ["10pt", null, "12.5pt", null, null, "15pt"],
  })}
`;
