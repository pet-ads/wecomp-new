// Styles
import { Container } from "./styles.ts";

// Types
import { TagProps } from "../../../../types/Tag";

export default function DifficultyTag({
  label,
  textColor,
  backgroundColor,
}: TagProps) {
  return (
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      {label}
    </Container>
  );
}
