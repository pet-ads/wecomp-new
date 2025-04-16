import styled from "styled-components";
import { TextContainerProps } from "./types.ts";

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

  overflow-wrap: break-word;

  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-family: ${({ fontFamily }) => fontFamily || "Arial, sans-serif"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "normal"};
  line-height: ${({ lineHeight }) => lineHeight || "1.5"};
  text-transform: ${({ textTransform }) => textTransform || "none"};
  text-align: ${({ textAlign }) => textAlign || "justify"};
  word-break: ${({ wordBreak }) => wordBreak || "normal"};
  white-space: ${({ whiteSpace }) => whiteSpace || "normal"};

  color: ${({ color }) => color || "var(--gray-1000)"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  text-shadow: ${({ textShadow }) => textShadow || "none"};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  opacity: ${({ opacity }) => (opacity !== undefined ? opacity : 1)};

  @media (max-width: 380px) {
    font-size: ${({ fontSize }) =>
      typeof fontSize === "string"
        ? `calc(${fontSize} * 0.8)`
        : fontSize
        ? `${fontSize * 0.8}px`
        : "0.8rem"};
  }
`;
