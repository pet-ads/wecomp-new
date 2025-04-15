<<<<<<< HEAD:src/components/sections/Editions/index.tsx
import { Section } from "../../Section";
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
=======
import SubTitle from "../../components/ui/SubTitle";

import useSectionRefs from "../../hooks/references/useSectionRefs";

import {
  EditionsCardContainer,
  EditionsContainer,
  EditionsContent,
} from "./styles";
import useEditionsSectionData from "../../hooks/fetch/useEditionsSectionData";
import Slider from "../../components/Slider";
>>>>>>> development:src/sections/Editions/index.tsx
import Card from "./subcomponents/Card";
import Slider from "../../Slider";

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
<<<<<<< HEAD:src/components/sections/Editions/index.tsx
        <ArrowButton sectionId="FAQ" />
=======
>>>>>>> development:src/sections/Editions/index.tsx
      </EditionsContent>
    </Section>
  );
}
