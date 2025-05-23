import RedirectButton from "../../../../commons/toolkit/RedirectButton";
import LabeledValue from "../../../../commons/toolkit/LabeledValue";

import { CardFooterProps } from "./types";

import { Container, ContainerButtons } from "./styles";

export default function CardFooter({
  vacancies,
  link,
}: CardFooterProps) {

  return (
    <Container>
      <LabeledValue label="Vagas" value={vacancies} />
      <ContainerButtons>
        <RedirectButton children="Inscrever-se" link={link} />
      </ContainerButtons>
    </Container>
  );
}
