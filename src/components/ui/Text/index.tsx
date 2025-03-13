import { TextContainerProps } from "./types.ts";

import { TextContainer } from "./styles.ts";

export default function Text({ children }: TextContainerProps) {
  return <TextContainer>{children}</TextContainer>;
}
