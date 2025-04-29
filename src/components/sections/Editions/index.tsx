import { Section } from "../../commons/structure/Section";
import Card from "./subcomponents/Card";
import Slider from "../../commons/toolkit/Slider";

import {
  Footer,
} from "../../../dto";

import editionsContent from "../../../assets/content/editions";

import { EditionsCardContainer, EditionsContent } from "./styles";

export default function Editions() {
  return (
    <Section title="Edições anteriores" currentSectionId="Editions">
      <EditionsContent>
        <EditionsCardContainer>
          <Slider
            items={editionsContent}
            renderItem={(item) => (
              <Card
                altText={item.altText}
                edition={item.edition}
                logoPath={item.logoPath}
                website={item.website}
              />
            )}
          />
        </EditionsCardContainer>
      </EditionsContent>
      <Footer />
    </Section>
  );
}
