import { OfferModalityProps } from "../types.ts";

import { Container } from "./styles.ts";

export default function ExpirienceTag({ label }: OfferModalityProps) {
  const getExperienceProperties = () => {
    const options = {
      Trainee: {
        backgroundColor: "#DCF7E4",
        textColor: "#1A800A",
        translateText: "Treinee",
      },
      Internship: {
        backgroundColor: "#E3F0FF",
        textColor: "#367AF5",
        translateText: "Estágio",
      },
      Hiring: {
        backgroundColor: "#FCF2D6",
        textColor: "#EAB00D",
        translateText: "Contratação",
      },
    };
    return options[label];
  };

  const tagProps = getExperienceProperties();

  return (
    <Container
      backgroundColor={tagProps.backgroundColor}
      textColor={tagProps.textColor}
    >
      {tagProps.translateText}
    </Container>
  );
}
