import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Slider from "../../Slider";
import Card from "./subcomponents/Card";

import highlightsContent from "../../../assets/content/highlights";

import { HighlightsCardContainer, HighlightsContent } from "./styles";

export default function Highlights() {
  return (
    <Section sectionId="Highlights">
      <HighlightsContent>
        <SubTitle children="Destaques" />
        <HighlightsCardContainer>
          <Slider
            items={highlightsContent}
            renderItem={(highlight) => (
              <Card key={highlight.title} {...highlight} />
            )}
          />
        </HighlightsCardContainer>
        <ArrowButton sectionId="Locations" />
      </HighlightsContent>
    </Section>
  );
}