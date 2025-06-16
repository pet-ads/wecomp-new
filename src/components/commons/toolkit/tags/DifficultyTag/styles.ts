import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

import { TagContainer } from "../../../../../styles/TagContainer";

export const Container = styled(TagContainer)<{
  backgroundColor: string;
  textColor: string;
  
}>`

${mq({
        width: ["5rem", "5rem", "5rem", "5rem", "5rem", "5rem", "6rem"],
        height: ["1rem", "1rem", "1rem", "1rem", "1rem", "1rem", "2rem"],
        fontSize: ["0.5rem", "0.5rem", "0.5rem", "0.5rem", "0.6rem", "0.6rem", "0.7rem"],
      })}
    `;
