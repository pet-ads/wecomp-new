import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useHighlightsSectionData from "../../../hooks/fetch/useHighlightsSectionData";

import {
  HighlightsCardContainer,
  HighlightsContainer,
  HighlightsContent,
} from "./styles";
import Slider from "../../Slider";
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
        <ArrowButton sectionRef={sections.Locations} />
      </HighlightsContent>
    </HighlightsContainer>
  );
}
// HighlightsSectionProps;
