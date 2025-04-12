import LabeledValue from "../../../../ui/LabeledValue";
import RedirectButton from "../../../../ui/RedirectButton";

import { Container } from "./styles";

import { CardFooterProps } from "./types";

export default function CardFooter({ vacancies, link }: CardFooterProps) {
  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />
      <RedirectButton children="Inscrever-se" link={link} />
    </Container>
  );
}
