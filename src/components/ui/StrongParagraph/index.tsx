import { StrongParagraphContainer } from "./style";

import { StrongParagraphProps } from "../../../types/StrongParagraphProps";

export default function StrongParagraph({ children }: StrongParagraphProps) {
  return <StrongParagraphContainer>{children}</StrongParagraphContainer>;
}
