import { Section } from "../../commons/structure/Section";

import aboutContent from "../../../assets/content/about";

import { Container, PrologueText } from "./styles";

export default function Prologue() {
  return (
    <Section currentSectionId="About" nextSectionId="Sponsors" title="Sobre a WECOMP">
      <Container>
        <PrologueText>{aboutContent.description}</PrologueText>
      </Container>
    </Section>
  );
}
