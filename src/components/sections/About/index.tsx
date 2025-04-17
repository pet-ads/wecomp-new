import { Section } from "../../commons/structure/Section";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";

import aboutContent from "../../../assets/content/about";

import { PrologueText } from "./styles";

export default function Prologue() {
  return (
    <Section sectionId="About">
      <SubTitle children={aboutContent.title} />
      <PrologueText>{aboutContent.description}</PrologueText>
      <ArrowButton sectionId="Sponsors" />
    </Section>
  );
}
