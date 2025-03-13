import { LabelContainer, LabelText } from "./styles";

import { SubtitleLabel } from "./types";

export default function SubTitle({ children }: SubtitleLabel) {
  return (
    <LabelContainer>
      <LabelText>{children}</LabelText>
    </LabelContainer>
  );
}
