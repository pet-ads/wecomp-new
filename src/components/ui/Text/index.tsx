import { TextContainerProps } from "./types.ts";
import { TextContainer } from "./styles.ts";

export default function Text({ children, ...props }: TextContainerProps) {
  return <TextContainer {...props}>{children}</TextContainer>;
}
