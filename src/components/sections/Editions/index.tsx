import { Section } from "../../commons/structure/Section";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";
import Card from "./subcomponents/Card";
import Slider from "../../commons/toolkit/Slider";

import editionsContent from "../../../assets/content/editions";

import { EditionsCardContainer, EditionsContent } from "./styles";

export default function Editions() {
  return (
    <Section sectionId="Editions">
      <EditionsContent>
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
        <ArrowButton sectionId="FAQ" />
      </EditionsContent>
    </Section>
  );
}
