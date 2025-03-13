export interface TextContainerProps {
  children: string;
  fontSize?: string | number;
  fontFamily?: string;
  fontWeight?: string | number;
  fontStyle?: "normal" | "italic" | "oblique";
  letterSpacing?: string | number;
  lineHeight?: string | number;
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  textAlign?: "left" | "right" | "center" | "justify";
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
  color?: string;
  backgroundColor?: string;
  textShadow?: string;
  textDecoration?: "none" | "underline" | "overline";
  opacity?: number;
  display?: "block" | "inline" | "inline-block" | "flex" | "grid" | "none";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
}
