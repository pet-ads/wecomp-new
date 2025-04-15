import SubTitle from "../../components/ui/SubTitle";

import useSectionRefs from "../../hooks/references/useSectionRefs";
import useHighlightsSectionData from "../../hooks/fetch/useHighlightsSectionData";

import {
  HighlightsCardContainer,
  HighlightsContainer,
  HighlightsContent,
} from "./styles";
import Slider from "../../components/Slider";
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
<<<<<<< HEAD:src/components/sections/Highlights/index.tsx
        <ArrowButton sectionId="Locations" />
=======
>>>>>>> development:src/sections/Highlights/index.tsx
      </HighlightsContent>
    </Section>
  );
}