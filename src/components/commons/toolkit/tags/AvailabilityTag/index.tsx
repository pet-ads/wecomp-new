import { AvailabilityProps } from "../types.ts";

import { Container } from "./styles.ts";

export default function AvailabilityTag({ label }: AvailabilityProps) {
  const getAvailabilityProperties = () => {
    const options = {
      Available: {
        backgroundColor: "#DCF7E4",
        textColor: "#1A800A",
        translateText: "Disponível",
      },
      LastVacancies: {
        backgroundColor: "#FCF2D6",
        textColor: "#EAB00D",
        translateText: "Últimas vagas",
      },
      Closed: {
        backgroundColor: "#F2E6E6",
        textColor: "#FF6158",
        translateText: "Encerrado",
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
      {tagProps.translateText}
    </Container>
  );
}
