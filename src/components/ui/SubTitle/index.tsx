// Components
import { LabelContainer, LabelText } from "./styles";

// Types
import { SubtitleLabel } from "../../../types/SectionLabel";

export default function SubTitle({ children }: SubtitleLabel){
  return (
    <LabelContainer>
      <LabelText>{children}</LabelText>
    </LabelContainer>
  );
};
