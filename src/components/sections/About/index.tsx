import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

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
