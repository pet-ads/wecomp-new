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
import UpcommingCard from "../../ui/SoonCard";
import useCheckDate from "../../../hooks/references/useCheckDate";

export default function Highlights() {
  const { sections } = useSectionRefs();

  const { eventHighlights } = useHighlightsSectionData();
  const checkDate = useCheckDate();

  return (
    <HighlightsContainer>
      <HighlightsContent ref={sections.Highlights}>
        <SubTitle children="Destaques" />
        <HighlightsCardContainer>
          <Slider
            items={eventHighlights}
            renderItem={(highlight) =>
              checkDate ? (
                <Card key={highlight.id} {...highlight} />
              ) : (
                <UpcommingCard />
              )
            }
          />
        </HighlightsCardContainer>
        <ArrowButton sectionRef={sections.Locations} />
      </HighlightsContent>
    </HighlightsContainer>
  );
}
// HighlightsSectionProps;
