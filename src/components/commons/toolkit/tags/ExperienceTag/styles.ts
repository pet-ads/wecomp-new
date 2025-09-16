import styled from "styled-components";

import { TagContainer } from "../../../../../styles/TagContainer";

import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled(TagContainer)<{
  backgroundColor: string;
  textColor: string;
}>`
  ${mq({
    width: ["6rem", "6rem", "6rem", "6rem", "6rem", "6rem", "7.5rem"],
    height: ["1rem", "1rem", "1rem", "1rem", "1rem", "1rem", "2rem"],
    fontSize: [
      "0.5rem",
      "0.6rem",
      "0.6rem",
      "0.6rem",
      "0.7rem",
      "0.7rem",
      "0.8rem",
    ],
  })}
`;
