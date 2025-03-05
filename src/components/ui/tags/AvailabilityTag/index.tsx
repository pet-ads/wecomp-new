// Styles
import { Container } from "./styles.ts";

// Types
import { AvailabilityProps } from "../../../../types/Tag";

export default function AvailabilityTag({label}: AvailabilityProps) {
  const getAvailabilityProperties = () => {
    const options = {
      Available: {
        backgroundColor: "#DCF7E4",
        textColor: "#1A800A",
      },
      LastVacancies: {
        backgroundColor: "#FCF2D6",
        textColor: "#EAB00D",
      },
      Closed: {
        backgroundColor: "#F2E6E6",
        textColor: "#FF6158",
      },
    };
    return options[label];
  };

  const tagProps = getAvailabilityProperties();

  return (
    <Container
      backgroundColor={tagProps.backgroundColor}
      textColor={tagProps.textColor}
    >
      {label}
    </Container>
  );
}
