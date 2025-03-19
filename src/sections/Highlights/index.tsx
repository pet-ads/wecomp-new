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

export default function Highlights() {
  const { sections } = useSectionRefs();

  const { eventHighlights } = useHighlightsSectionData();

  return (
    <HighlightsContainer>
      <HighlightsContent ref={sections.Highlights}>
        <SubTitle children="Destaques" />
        <HighlightsCardContainer>
          <Slider
            items={eventHighlights}
            renderItem={(highlight) => (
              <Card key={highlight.id} {...highlight} />
            )}
          />
        </HighlightsCardContainer>
      </HighlightsContent>
    </HighlightsContainer>
  );
}
// HighlightsSectionProps;
