import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/useSectionRefs";

import {
  EditionsCardContainer,
  EditionsContainer,
  EditionsContent,
} from "./styles";
import useFetchEditionsSection from "../../../hooks/useFetchEditionsSection";
import Slider from "../../Slider";
import Card from "./subcomponents/Card";

export default function Editions() {
  const { sections } = useSectionRefs();
  const { previousEditions } = useFetchEditionsSection();

  return (
    <EditionsContainer>
      <EditionsContent ref={sections.Editions}>
        <SubTitle children="Edições anteriores" />
        <EditionsCardContainer>
          <Slider
            items={previousEditions}
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
