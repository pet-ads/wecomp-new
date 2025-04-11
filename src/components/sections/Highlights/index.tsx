import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Slider from "../../Slider";
import UpcommingCard from "../../ui/SoonCard";
import Card from "./subcomponents/Card";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import useCheckDate from "../../../hooks/references/useCheckDate";

import highlightsContent from "../../../assets/content/highlights";

import {
  HighlightsCardContainer,
  HighlightsContainer,
  HighlightsContent,
} from "./styles";

export default function Highlights() {
  const { sections } = useSectionRefs();
  const checkDate = useCheckDate();

  return (
    <HighlightsContainer>
      <HighlightsContent ref={sections.Highlights}>
        <SubTitle children="Destaques" />
        <HighlightsCardContainer>
          {checkDate ? (
            <Slider
              items={highlightsContent}
              renderItem={(highlight) => (
                <Card key={highlight.title} {...highlight} />
              )}
            />
          ) : (
            <UpcommingCard />
          )}
        </HighlightsCardContainer>
        <ArrowButton sectionRef={sections.Locations} />
      </HighlightsContent>
    </HighlightsContainer>
  );
}
// HighlightsSectionProps;
