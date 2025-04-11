import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Card from "./subcomponents/Card";
import Slider from "../../Slider";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import editionsContent from "../../../assets/content/editions";

import {
  EditionsCardContainer,
  EditionsContainer,
  EditionsContent,
} from "./styles";

export default function Editions() {
  const { sections } = useSectionRefs();

  return (
    <EditionsContainer>
      <EditionsContent ref={sections.Editions}>
        <SubTitle children="Edições anteriores" />
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
        <ArrowButton sectionRef={sections.FAQs} />
      </EditionsContent>
    </EditionsContainer>
  );
}
