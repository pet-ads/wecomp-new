import { Section } from "../../commons/structure/Section";
import { HighlightsContent } from "./styles";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";

import comingSoonImg from "../../../assets/images/emBreve.png"; 

export default function Highlights() {
  return (
    <Section sectionId="Highlights">
      <HighlightsContent>
      <SubTitle children="Destaques" />
        <img src={comingSoonImg} alt="Em breve" style={{ width: "100%", maxWidth: "500px" }} />
        <ArrowButton sectionId="Locations" />
      </HighlightsContent>
    </Section>
  );
}
