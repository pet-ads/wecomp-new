import { Section } from "../../commons/structure/Section";
import { HighlightsContent } from "./styles";

import comingSoonImg from "../../../assets/images/emBreve.png";

export default function Highlights() {
  return (
    <Section
      title="Destaques"
      currentSectionId="Highlights"
      nextSectionId="Locations"
    >
      <HighlightsContent>
        <img
          src={comingSoonImg}
          alt="Em breve"
          style={{ width: "100%", maxWidth: "500px" }}
        />
      </HighlightsContent>
    </Section>
  );
}
