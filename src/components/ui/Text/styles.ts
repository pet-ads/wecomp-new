import styled from "styled-components";
import { TextContainerProps } from "./types";

export const TextContainer = styled.div<TextContainerProps>`
  display: ${({ display }) => display || "flex"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};

  width: ${({ width }) => width || "100%"};
  min-width: ${({ minWidth }) => minWidth || "60%"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};

  height: ${({ height }) => height || "auto"};
  min-height: ${({ minHeight }) => minHeight || "none"};
  max-height: ${({ maxHeight }) => maxHeight || "none"};

  padding: 2rem 1rem;

  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  text-align: ${({ textAlign }) => textAlign || "justify"};

  color: ${({ color }) => color || "var(--secundary-text-color)"};
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};

  @media (max-width: 380px) {
    font-size: ${({ fontSize }) =>
      typeof fontSize === "string"
        ? `calc(${fontSize} * 0.8)`
        : fontSize
        ? `${fontSize * 0.8}px`
        : "0.8rem"};
  }
`;