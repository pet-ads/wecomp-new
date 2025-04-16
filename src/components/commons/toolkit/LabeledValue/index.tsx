import { LabeledValueProps } from "./types";

import { LabeledValueContainer } from "./style";

export default function LabeledValue({ label, value }: LabeledValueProps) {
  return (
    <LabeledValueContainer>
      <strong>{label}:</strong>
      {value}
    </LabeledValueContainer>
  );
}
