import { Section } from "../../commons/structure/Section";
import Card from "./subcomponents/Card";
import Slider from "../../commons/toolkit/Slider";

import editionsContent from "../../../assets/content/editions";

import { EditionsCardContainer, EditionsContent } from "./styles";

export default function Editions() {
  return (
    <Section
      isLastSection
      title="Edições anteriores"
      currentSectionId="Editions"
    >
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
    </Section>
  );
}
