// Components
import { LabelContainer, LabelText } from "./styles";

// Types
import { SubtitleLabel } from "../../types/SectionLabel";

export const SubTitle = ({ children }: SubtitleLabel) => {
  return (
    <LabelContainer>
      <LabelText>{children}</LabelText>
    </LabelContainer>
  );
};
