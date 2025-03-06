import { LabelContainer, LabelText } from "./styles";

import { SubtitleLabel } from "../../../types/SectionLabel";

export default function SubTitle({ children }: SubtitleLabel) {
  return (
    <LabelContainer>
      <LabelText>{children}</LabelText>
    </LabelContainer>
  );
}
