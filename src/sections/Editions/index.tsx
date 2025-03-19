import SubTitle from "../../components/ui/SubTitle";

import useSectionRefs from "../../hooks/references/useSectionRefs";

import {
  EditionsCardContainer,
  EditionsContainer,
  EditionsContent,
} from "./styles";
import useEditionsSectionData from "../../hooks/fetch/useEditionsSectionData";
import Slider from "../../components/Slider";
import Card from "./subcomponents/Card";

export default function Editions() {
  const { sections } = useSectionRefs();
  const { previousEditions } = useEditionsSectionData();

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
      </EditionsContent>
    </EditionsContainer>
  );
}
