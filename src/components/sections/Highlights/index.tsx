import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Slider from "../../Slider";
import UpcommingCard from "../../ui/SoonCard";
import Card from "./subcomponents/Card";

import useCheckDate from "../../../hooks/references/useCheckDate";

import highlightsContent from "../../../assets/content/highlights";

import { HighlightsCardContainer, HighlightsContent } from "./styles";

export default function Highlights() {
  const checkDate = useCheckDate();

  return (
    <Section sectionId="Highlights">
      <HighlightsContent>
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
        <ArrowButton sectionId="Locations" />
      </HighlightsContent>
    </Section>
  );
}
