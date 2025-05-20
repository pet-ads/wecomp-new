import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

import { TagContainer } from "../../../../../styles/TagContainer";

export const Container = styled(TagContainer)<{
  backgroundColor: string;
  textColor: string;
  
}>`
  ${mq({
        width: ["4rem", "4rem", "4rem", "4rem", "4rem", "4rem", "6rem"],
        height: ["2rem", "2rem", "2rem", "2rem", "2rem", "2rem", "3rem"],
        fontSize: ["0.4rem", "0.4rem", "0.4rem", "0.4rem", "0.5rem", "0.5rem", "0.7rem"],
      })}
`;
