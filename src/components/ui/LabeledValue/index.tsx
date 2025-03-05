// Types
import { LabeledValueProps } from "../../../types/LabeledValueProps";

// Styles
import { LabeledValueContainer } from "./style";

export default function LabeledValue({ label, value }: LabeledValueProps) {
  return (
    <LabeledValueContainer>
      <strong>{label}:</strong>{value}
    </LabeledValueContainer>
  );
}
