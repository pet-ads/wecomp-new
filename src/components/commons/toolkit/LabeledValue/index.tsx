import { LabeledValueProps } from "./types";

import { LabeledValueContainer } from "./styles";

export default function LabeledValue({ label, value }: LabeledValueProps) {
  return (
    <LabeledValueContainer>
      <strong>{label}:</strong>
      {value}
    </LabeledValueContainer>
  );
}
